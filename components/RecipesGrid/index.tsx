import { Recipe } from '@/models';
import { Flex } from '@chakra-ui/react';

interface RecipesGridProps {
  recipes: Recipe[];
  maxItems?: number;
}

const limitItems = <T,>(items: T[], maxItems: number | undefined): T[] => {
  if (maxItems && maxItems >= 0 && maxItems <= items.length - 1) {
    return items.slice(0, maxItems);
  }
  return items;
};

const RecipesGrid = ({ recipes, maxItems }: RecipesGridProps) => {
  const viewedRecipes = limitItems(recipes, maxItems);

  return (
    <>
      {viewedRecipes.map((r) => (
        <Flex key={r.uid}>{r.title}</Flex>
      ))}
    </>
  );
};

export default RecipesGrid;
