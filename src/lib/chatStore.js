import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, limit, where } from 'firebase/firestore';
import { db } from './firebase';

// Resilient memory store fallback when Firebase/Firestore is unconfigured or offline
const memoryStore = {
  conversations: new Map(),
  messages: new Map()
};

export async function createConversation(title) {
  const id = `conv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const item = {
    id,
    title: title || 'New Financial Session',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  try {
    if (db) {
      const docRef = await addDoc(collection(db, 'conversations'), {
        title: item.title,
        created_at: item.created_at,
        updated_at: item.updated_at
      });
      return { id: docRef.id, title: item.title };
    }
  } catch (err) {
    console.warn('[chatStore] Firestore write failed, using memory store fallback:', err.message);
  }

  memoryStore.conversations.set(id, item);
  return { id, title: item.title };
}

export async function getConversations() {
  try {
    if (db) {
      const q = query(collection(db, 'conversations'), orderBy('updated_at', 'desc'), limit(20));
      const snap = await getDocs(q);
      if (snap && snap.docs.length > 0) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn('[chatStore] Firestore read failed, using memory fallback:', err.message);
  }

  return Array.from(memoryStore.conversations.values())
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}

export async function deleteConversation(id) {
  try {
    if (db) {
      await deleteDoc(doc(db, 'conversations', id));
    }
  } catch (err) {
    console.warn('[chatStore] Firestore delete error:', err.message);
  }
  memoryStore.conversations.delete(id);
  memoryStore.messages.delete(id);
}

export async function getMessages(conversationId) {
  try {
    if (db) {
      const q = query(
        collection(db, 'messages'),
        where('conversation_id', '==', conversationId),
        orderBy('created_at', 'asc')
      );
      const snap = await getDocs(q);
      if (snap && snap.docs.length > 0) {
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
    }
  } catch (err) {
    console.warn('[chatStore] Firestore getMessages error:', err.message);
  }

  return memoryStore.messages.get(conversationId) || [];
}

export async function addMessage(conversationId, role, content, extra = {}) {
  const msg = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    conversation_id: conversationId,
    role,
    content,
    created_at: new Date().toISOString(),
    ...extra
  };

  try {
    if (db) {
      await addDoc(collection(db, 'messages'), msg);
    }
  } catch (err) {
    console.warn('[chatStore] Firestore addMessage error:', err.message);
  }

  if (!memoryStore.messages.has(conversationId)) {
    memoryStore.messages.set(conversationId, []);
  }
  memoryStore.messages.get(conversationId).push(msg);

  // Update conversation timestamp
  if (memoryStore.conversations.has(conversationId)) {
    memoryStore.conversations.get(conversationId).updated_at = msg.created_at;
  }
}

export async function getRecentMessages(conversationId, count = 10) {
  const all = await getMessages(conversationId);
  return all.slice(-count);
}
