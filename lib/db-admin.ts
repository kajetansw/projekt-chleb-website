import { Recipe } from '@/models';
import { firestore, storage } from '@/lib/firebase-admin';

export async function getPopularRecipes(amount: number) {
  const snapshot = await firestore.collection('recipes').orderBy('likes', 'desc').get();

  const recipes: Recipe[] = [];

  try {
    for (let i = 0; i < Math.min(snapshot.docs.length, amount); i++) {
      const doc = snapshot.docs[i];
      const recipe = { uid: doc.id, ...doc.data() } as Recipe;
      recipe.imageSrc = await getImageDownloadUrl(recipe.imageSrc);
      recipes.push(recipe);
    }

    return recipes;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getNewestRecipes(amount: number) {
  const snapshot = await firestore.collection('recipes').orderBy('inputDate', 'desc').get();

  const recipes: Recipe[] = [];

  try {
    for (let i = 0; i < Math.min(snapshot.docs.length, amount); i++) {
      const doc = snapshot.docs[i];
      const recipe = { uid: doc.id, ...doc.data() } as Recipe;
      recipe.imageSrc = await getImageDownloadUrl(recipe.imageSrc);
      recipes.push(recipe);
    }

    return recipes;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getImageDownloadUrl(imageName: string) {
  const bucketName = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(process.env.NEXT_PUBLIC_FIREBASE_IMAGE_STORAGE_FOLDER + '/' + imageName);
  const urls = await file.getSignedUrl({
    action: 'read',
    expires: new Date().setFullYear(new Date().getFullYear() + 2),
  });
  return urls[0];
}
