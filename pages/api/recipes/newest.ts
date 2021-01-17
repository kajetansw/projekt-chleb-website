import { NextApiRequest, NextApiResponse } from 'next';
import { Recipe } from '@/models';
import { getNewestRecipes } from '@/lib/db-admin';

/**
 * /recipes/newest
 *   GET:
 *     query:
 *       - amount: number
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const recipes: Recipe[] = await getNewestRecipes(Number(req.query.amount) || 0);

  res.status(200).json(recipes);
};

export default handler;
