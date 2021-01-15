import { Recipe, User } from '@/models';
import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firestore = firebase.firestore();

export const FIREBASE_IMAGE_STORAGE_FOLDER = 'images';

export function createUser(user: Omit<User, 'admin'>) {
  return firestore.collection('users').doc(user.uid).set(user, { merge: true });
}

export function createRecipe(
  recipe: Omit<Recipe, 'uid' | 'likes' | 'inputDate' | 'imageSrc'>,
  imgFiles: File[]
) {
  const recipeToAdd: Omit<Recipe, 'uid'> = {
    ...recipe,
    inputDate: new Date().toISOString(),
    likes: 0,
    imageSrc: imgFiles?.[0]?.name || '',
  };

  return Promise.all([saveFiles(imgFiles), firestore.collection('recipes').add(recipeToAdd)]);
}

function saveFiles(files: File[]) {
  files.forEach((file) => {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      throw new Error('Not supported file type!');
    }

    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(FIREBASE_IMAGE_STORAGE_FOLDER + '/' + file.name);
    return imageRef.put(file);
  });
}
