import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/firebase-admin';
import { Recipe } from '@/models';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await db.collection('recipes').get();
  const recipes: Recipe[] = [];

  snapshot.forEach((doc) => {
    recipes.push({ uid: doc.id, ...doc.data() } as Recipe);
  });

  res.status(200).json(recipes);
};

export default handler;
