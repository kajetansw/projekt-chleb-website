import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

import { Recipe } from '@/models';
import { getAllRecipes, getRecipeWithId } from '@/lib/db-admin';
import PageShell from '@/components/PageShell';
import ResponsiveImage from '@/components/ResponsiveImage';
import TitleHeading from '@/components/TitleHeading';
import IconBadge from '@/components/IconBadge';
import formatMinutes from '@/utils/formatMinutes';
import TagIcon from '@/components/TagIcon';
import LikeIcon from '@/components/LikeIcon';

interface RecipeProps {
  recipe: Recipe | undefined;
}

const RecipeView = ({ recipe }: RecipeProps) => {
  const router = useRouter();

  if (!recipe) {
    return (
      <PageShell title="Nie ma takiego przepisu!">
        <Heading>Nie ma takiego przepisu!</Heading>
      </PageShell>
    );
  }
  if (router.isFallback) {
    return (
      <PageShell title="Ładowanie...">
        <Heading>Ładowanie...</Heading>
      </PageShell>
    );
  }

  return (
    <PageShell title={recipe.title}>
      <ResponsiveImage
        src={recipe.imageSrc}
        width={{ base: 600, sm: 1000, md: 3000 }}
        height={{ base: 525, sm: 400, md: 800 }}
        objectFit="cover"
      ></ResponsiveImage>

      <TitleHeading fontSize={42} mt={10} mb={4}>
        {recipe.title}
      </TitleHeading>
      <Flex direction={['column', 'row']}>
        <IconBadge
          IconComponent={TimeIcon}
          color="#000000"
          fontSize={18}
          iconColor="#27AE60"
          iconSize={7}
          mr={6}
        >
          {formatMinutes(recipe.timeOfPreparationInMins)}
        </IconBadge>
        <IconBadge
          my={[4, 0]}
          IconComponent={TagIcon}
          color="#000000"
          fontSize={18}
          iconColor="#2D9CDB"
          iconSize={7}
          mr={6}
        >
          {recipe.tags.join(', ')}
        </IconBadge>
        <IconBadge
          IconComponent={LikeIcon}
          color="#000000"
          fontSize={18}
          iconColor="#F2C94C"
          iconSize={7}
          mr={6}
        >
          {recipe.likes}
        </IconBadge>
      </Flex>

      <Flex direction={['column', 'column', 'row']} mt={12}>
        <Box flexBasis="33%" mr={14} mb={[8, 8, 0]}>
          <Heading fontSize={24} mb={5}>
            Składniki
          </Heading>
          <UnorderedList fontSize={18}>
            {recipe.ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box flexBasis="67%">
          <Heading fontSize={24} mb={5}>
            Przygotowanie
          </Heading>
          <Text fontSize={18}>{recipe.instruction}</Text>
        </Box>
      </Flex>
    </PageShell>
  );
};

export async function getStaticPaths(): Promise<GetStaticPathsResult<{ id: string }>> {
  const allRecipes = await getAllRecipes();

  const paths = allRecipes.map((recipe) => ({
    params: { id: recipe.uid },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({
  params,
}: {
  params: { id: string };
}): Promise<GetStaticPropsResult<{ recipe: Recipe | undefined }>> {
  const recipe = await getRecipeWithId(params.id);
  return { props: { recipe } };
}

export default RecipeView;
