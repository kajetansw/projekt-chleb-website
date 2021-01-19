import { Recipe } from '@/models';
import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

import ResponsiveImage from '@/components/ResponsiveImage';
import TitleHeading from '@/components/TitleHeading';
import IconBadge from '@/components/IconBadge';
import TagIcon from '@/components/TagIcon';
import formatMinutes from '@/utils/formatMinutes';
import StyledLink from '@/components/StyledLink';

interface RecipesGridProps {
  recipes: Recipe[];
  maxItems?: number;
}

const limitItems = <T,>(items: T[], maxItems?: number): T[] => {
  if (maxItems && maxItems >= 0 && maxItems <= items.length - 1) {
    return items.slice(0, maxItems);
  }
  return items;
};

const RecipesGrid = ({ recipes, maxItems }: RecipesGridProps) => {
  if (!recipes?.length) {
    return <Heading fontSize={24}>Brak przepisów!</Heading>;
  }

  const viewedRecipes = limitItems(recipes, maxItems);

  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(220px, 1fr))" gridGap={10}>
        {viewedRecipes.map((r) => (
          <StyledLink key={r.uid} href={'p/' + r.uid}>
            <Flex flexDir="column">
              <ResponsiveImage
                src={r.imageSrc}
                width={{ base: 220 }}
                height={{ base: 320 }}
                objectFit="cover"
              ></ResponsiveImage>
              <Box mt={2} mb={3}>
                <IconBadge
                  IconComponent={TimeIcon}
                  color="#828282"
                  fontSize={12}
                  iconColor="#828282"
                  iconSize={15}
                  mr={4}
                >
                  {formatMinutes(r.timeOfPreparationInMins)}
                </IconBadge>
                <IconBadge
                  IconComponent={TagIcon}
                  color="#828282"
                  fontSize={12}
                  iconColor="#828282"
                  iconSize={15}
                >
                  {limitItems(r.tags, 2).join(', ')}
                </IconBadge>
              </Box>
              <TitleHeading fontSize={22}>{r.title}</TitleHeading>
            </Flex>
          </StyledLink>
        ))}
      </Grid>
    </>
  );
};

export default RecipesGrid;
