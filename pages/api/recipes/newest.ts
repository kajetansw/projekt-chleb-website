import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/firebase-admin';
import { Recipe } from '@/models';

/**
 * /recipes/newest
 *   GET:
 *     query:
 *       - amount: number
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await db.collection('recipes').orderBy('inputDate', 'desc').get();

  const recipes: Recipe[] = [];
  const amount: number = Number(req.query.amount) || 0;

  for (let i = 0; i < amount; i++) {
    const doc = snapshot.docs[i];
    recipes.push({ uid: doc.id, ...doc.data() } as Recipe);
  }

  res.status(200).json(recipes);
};

export default handler;
