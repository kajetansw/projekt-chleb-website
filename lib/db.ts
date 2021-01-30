import { RecipeFormInput, User, Recipe } from '@/models';
import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firestore = firebase.firestore();

export function createUser(user: Omit<User, 'admin' | 'token'>) {
  return firestore.collection('users').doc(user.uid).set(user, { merge: true });
}

export function createRecipe(recipe: RecipeFormInput, imgFiles?: File) {
  const recipeToAdd: Recipe = {
    ...recipe,
    inputDate: new Date().toISOString(),
    likes: [],
    imageSrc: imgFiles?.name || '',
    uid: '',
  };
  const doc = firestore.collection('recipes').doc();

  return Promise.all([
    imgFiles ? saveFile(imgFiles) : Promise.resolve(),
    doc.set({ ...recipeToAdd, uid: doc.id }),
  ]);
}

export function addLike(recipe: Recipe, userId: string) {
  const updatedRecipeLikes: Recipe['likes'] = [...recipe.likes, { userId }];
  return firestore.collection('recipes').doc(recipe.uid).update({ likes: updatedRecipeLikes });
}

export function removeLike(recipe: Recipe, userId: string) {
  const updatedRecipeLikes: Recipe['likes'] = recipe.likes.filter((l) => l.userId !== userId);
  return firestore.collection('recipes').doc(recipe.uid).update({ likes: updatedRecipeLikes });
}

function saveFile(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'kajetansw_unsigned');
  formData.append('public_id', trimFileExtension(file.name));

  return fetch('https://api.cloudinary.com/v1_1/kajetansw-cloud/upload', {
    method: 'POST',
    body: formData,
  }).then((r) => r.json());
}

function trimFileExtension(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, '');
}
