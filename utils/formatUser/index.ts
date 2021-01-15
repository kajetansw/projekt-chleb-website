import firebase from 'firebase/app';
import { User } from '@/models';
import jwtDecode from 'jwt-decode';

export default function formatUser(user: firebase.User): User {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0]?.providerId,
    photoURL: user.photoURL,
    admin: !!jwtDecode<object>(user['ya'] as string)['admin'],
  };
}
