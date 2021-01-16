import { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '@/lib/firebase-admin';
import { Recipe } from '@/models';

/**
 * /recipes/all
 *   GET
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await firestore.collection('recipes').get();
  const recipes: Recipe[] = [];

  snapshot.forEach((doc) => {
    recipes.push({ uid: doc.id, ...doc.data() } as Recipe);
  });

  res.status(200).json(recipes);
};

export default handler;
