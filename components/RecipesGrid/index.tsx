import { Recipe } from '@/models';
import { Flex, Grid } from '@chakra-ui/react';

import ResponsiveImage from '@/components/ResponsiveImage';
import TitleHeading from '@/components/TitleHeading';

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
      <Grid templateColumns="repeat(auto-fill, minmax(220px, 1fr))" gridGap={10}>
        {viewedRecipes.map((r) => (
          <Flex key={r.uid} flexDir="column">
            <ResponsiveImage
              src={r.imageSrc}
              width={{ base: 220 }}
              height={{ base: 320 }}
              objectFit="cover"
            ></ResponsiveImage>
            <TitleHeading fontSize={22}>{r.title}</TitleHeading>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default RecipesGrid;
