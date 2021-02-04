import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { useEffect, useReducer } from 'react';

import { getAllRecipes, getRecipeWithId } from '@/lib/db-admin';
import PageShell from '@/components/PageShell';
import ResponsiveImage from '@/components/ResponsiveImage';
import TitleHeading from '@/components/TitleHeading';
import IconBadge from '@/components/IconBadge';
import formatMinutes from '@/utils/formatMinutes';
import TagIcon from '@/components/TagIcon';
import LikeButton from '@/components/LikeButton';
import { Recipe } from '@/models';
import LikeIcon from '@/components/LikeIcon';

interface RecipeProps {
  recipe: Recipe;
}

type RecipeStateActions =
  | { type: 'recipe/update'; payload: Recipe }
  | { type: 'recipeLikes/update'; payload: Recipe['likes'] };

const recipeReducer: React.Reducer<Recipe, RecipeStateActions> = (state, action) => {
  switch (action.type) {
    case 'recipe/update':
      return { ...state, ...action.payload };
    case 'recipeLikes/update':
      return { ...state, likes: action.payload };
  }
};

const RecipeView = ({ recipe }: RecipeProps) => {
  const router = useRouter();
  const [recipeState, dispatch] = useReducer(recipeReducer, recipe);

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

  useEffect(() => {
    if (recipe) {
      dispatch({ type: 'recipe/update', payload: recipe });
    }
  }, [recipe]);

  return (
    <PageShell title={recipeState.title}>
      <ResponsiveImage
        src={recipeState.imageSrc}
        width={{ base: 600, sm: 1000, md: 3000 }}
        height={{ base: 525, sm: 400, md: 800 }}
        objectFit="cover"
      ></ResponsiveImage>

      <TitleHeading fontSize={42} mt={10} mb={4}>
        {recipeState.title}
      </TitleHeading>
      <Flex direction={['column', 'row']} justify="space-between">
        <Box>
          <IconBadge
            IconComponent={TimeIcon}
            color="#000000"
            fontSize={18}
            iconColor="#27AE60"
            iconSize={7}
            mr={6}
          >
            {formatMinutes(recipeState.timeOfPreparationInMins)}
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
            {recipeState.tags.join(', ')}
          </IconBadge>
          <IconBadge
            mb={[7, 0]}
            IconComponent={LikeIcon}
            color="#000000"
            fontSize={18}
            iconColor="#ECC94B"
            iconSize={7}
            mr={6}
          >
            {recipeState.likes.length}
          </IconBadge>
        </Box>
        <LikeButton
          recipe={recipeState}
          onLikesChange={(likes) => dispatch({ type: 'recipeLikes/update', payload: likes })}
        />
      </Flex>

      <Flex direction={['column', 'column', 'row']} mt={12}>
        <Box flexBasis="33%" mr={14} mb={[8, 8, 0]}>
          <Heading fontSize={24} mb={5}>
            Składniki
          </Heading>
          {recipeState.ingredientSections.map((section) => (
            <Box key={section.title} mb={4}>
              <Heading fontSize={18}>{section.title}</Heading>
              <UnorderedList fontSize={18} mb={6}>
                {section.ingredients.map((i) => (
                  <ListItem key={i}>{i}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Box>

        <Box flexBasis="67%">
          <Heading fontSize={24} mb={5}>
            Przygotowanie
          </Heading>
          <Text whiteSpace="pre-wrap" textAlign="justify" fontSize={18}>
            {recipeState.instruction}
          </Text>
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
