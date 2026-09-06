import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function syncUserToFirestore(user, additionalData = {}) {
  if (!user?.uid || !db) return;

  const payload = {
    display_name: additionalData.name || user.displayName || user.email?.split('@')[0] || '',
    email: user.email || '',
    last_sync: new Date().toISOString(),
  };

  try {
    await setDoc(doc(db, 'profiles', user.uid), payload, { merge: true });
  } catch (err) {
    console.error('Exception syncing user to Firestore:', err);
  }
}

export async function fetchUserProfile(userId) {
  if (!db) return null;

  try {
    const snap = await getDoc(doc(db, 'profiles', userId));
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  } catch (err) {
    console.error('Exception fetching profile:', err);
    return null;
  }
}
