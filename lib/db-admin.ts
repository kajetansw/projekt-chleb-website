import { Recipe } from '@/models';
import { firestore, storage } from '@/lib/firebase-admin';

export async function getPopularRecipes(amount: number) {
  const snapshot = await firestore
    .collection('recipes')
    .orderBy('likes', 'desc')
    .limit(amount)
    .get();

  try {
    return await firebaseDocsToRecipe(snapshot);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getNewestRecipes(amount: number) {
  const snapshot = await firestore
    .collection('recipes')
    .orderBy('inputDate', 'desc')
    .limit(amount)
    .get();

  try {
    return await firebaseDocsToRecipe(snapshot);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getAllRecipes() {
  const snapshot = await firestore.collection('recipes').get();

  try {
    return await firebaseDocsToRecipe(snapshot);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getLikesForRecipe(uid: string) {
  try {
    const recipe = await getRecipeWithId(uid);
    return recipe?.likes || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getAllRecipesWithTag(tag: string) {
  const snapshot = await firestore.collection('recipes').where('tags', 'array-contains', tag).get();

  try {
    return await firebaseDocsToRecipe(snapshot);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getRecipeWithId(id: string): Promise<Recipe | undefined> {
  const snapshot = await firestore.collection('recipes').doc(id).get();
  const recipe = snapshot.data() as Recipe | undefined;
  if (recipe) {
    recipe.imageSrc = await getImageDownloadUrl(recipe.imageSrc);
  }

  return recipe;
}

async function firebaseDocsToRecipe(
  snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>
) {
  const recipes: Recipe[] = [];

  for (const doc of snapshot.docs) {
    const recipe = doc.data() as Recipe;
    recipe.imageSrc = await getImageDownloadUrl(recipe.imageSrc);
    recipes.push(recipe);
  }

  return recipes;
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
