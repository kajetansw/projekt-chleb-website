import { NextApiRequest, NextApiResponse } from 'next';
import { Recipe } from '@/models';
import { getAllRecipesWithTag } from '@/lib/db-admin';

/**
 * /recipes/tag
 *   POST
 *    - body: { tag: string }
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const recipes: Recipe[] = await getAllRecipesWithTag(String(req.body.tag));

  res.status(200).json(recipes);
};

export default handler;
