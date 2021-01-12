import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createUser(user: firebase.User) {
  const userData = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0]?.providerId,
    photoURL: user.photoURL,
  };
  return firestore.collection('users').doc(user.uid).set(userData, { merge: true });
}