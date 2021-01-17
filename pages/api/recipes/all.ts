import { NextApiRequest, NextApiResponse } from 'next';
import { getAllRecipes } from '@/lib/db-admin';

/**
 * /recipes/all
 *   GET
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const recipes = await getAllRecipes();

  res.status(200).json(recipes);
};

export default handler;
