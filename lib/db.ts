import { RecipeFormInput, User, Recipe } from '@/models';
import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firestore = firebase.firestore();

export function createUser(user: Omit<User, 'admin' | 'token'>) {
  return firestore.collection('users').doc(user.uid).set(user, { merge: true });
}

export function createRecipe(recipe: RecipeFormInput, imgFiles: File[]) {
  const recipeToAdd: Recipe = {
    ...recipe,
    inputDate: new Date().toISOString(),
    likes: [],
    imageSrc: imgFiles?.[0]?.name || '',
    uid: '',
  };
  const doc = firestore.collection('recipes').doc();

  return Promise.all([saveFiles(imgFiles), doc.set({ ...recipeToAdd, uid: doc.id })]);
}

export function addLike(recipe: Recipe, userId: string) {
  const updatedRecipeLikes: Recipe['likes'] = [...recipe.likes, { userId }];
  return firestore.collection('recipes').doc(recipe.uid).update({ likes: updatedRecipeLikes });
}

export function removeLike(recipe: Recipe, userId: string) {
  const updatedRecipeLikes: Recipe['likes'] = recipe.likes.filter((l) => l.userId !== userId);
  return firestore.collection('recipes').doc(recipe.uid).update({ likes: updatedRecipeLikes });
}

function saveFiles(files: File[]) {
  files.forEach((file) => {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      throw new Error('Not supported file type!');
    }

    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(
      process.env.NEXT_PUBLIC_FIREBASE_IMAGE_STORAGE_FOLDER + '/' + file.name
    );

    return imageRef.put(file);
  });
}
