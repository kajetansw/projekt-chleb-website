import { Recipe } from '@/models';
import { firestore } from '@/lib/firebase-admin';

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

  return recipe;
}

async function firebaseDocsToRecipe(
  snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>
) {
  const recipes: Recipe[] = [];

  for (const doc of snapshot.docs) {
    const recipe = doc.data() as Recipe;
    recipes.push(recipe);
  }

  return recipes;
}
