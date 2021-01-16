import { Recipe } from '@/models';
import { NextApiRequest, NextApiResponse } from 'next';
import { getPopularRecipes } from '@/lib/db-admin';

/**
 * /recipes/popular
 *   GET:
 *     query:
 *       - amount: number
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const recipes: Recipe[] = await getPopularRecipes(Number(req.query.amount) || 0);

  res.status(200).json(recipes);
};

export default handler;
