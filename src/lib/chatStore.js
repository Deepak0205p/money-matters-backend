import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, limit, where, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export async function createConversation(title) {
  if (!db) return null;
  const docRef = await addDoc(collection(db, 'conversations'), {
    title: title || 'New Conversation',
    updated_at: new Date().toISOString(),
  });
  return { id: docRef.id, title: title || 'New Conversation' };
}

export async function getConversations() {
  if (!db) return [];
  const q = query(collection(db, 'conversations'), orderBy('updated_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function deleteConversation(id) {
  if (!db) return;
  await deleteDoc(doc(db, 'conversations', id));
}

export async function getMessages(conversationId) {
  if (!db) return [];
  const q = query(
    collection(db, 'messages'),
    where('conversation_id', '==', conversationId),
    orderBy('created_at', 'asc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addMessage(conversationId, role, content, extra = {}) {
  if (!db) return;
  await addDoc(collection(db, 'messages'), {
    conversation_id: conversationId,
    role,
    content,
    created_at: new Date().toISOString(),
    ...extra,
  });
}

export async function getRecentMessages(conversationId, count = 10) {
  if (!db) return [];
  const q = query(
    collection(db, 'messages'),
    where('conversation_id', '==', conversationId),
    orderBy('created_at', 'desc'),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data()).reverse();
}
