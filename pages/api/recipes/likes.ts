import { NextApiRequest, NextApiResponse } from 'next';
import { getLikesForRecipe } from '@/lib/db-admin';

/**
 * /recipes/likes
 *   GET
 *    query:
 *      - uid: string
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const recipes = await getLikesForRecipe(String(req.query.uid));

  res.status(200).json(recipes);
};

export default handler;
