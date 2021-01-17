import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';

import { Recipe } from '@/models';
import { getAllRecipes, getRecipeWithId } from '@/lib/db-admin';
import { Heading } from '@chakra-ui/react';

interface RecipeProps {
  recipe: Recipe | undefined;
}

const RecipeView = ({ recipe }: RecipeProps) => {
  const router = useRouter();

  if (!recipe) {
    return <Heading>Nie ma takiego przepisu!</Heading>;
  }
  if (router.isFallback) {
    return <Heading>Ładowanie...</Heading>;
  }

  return <div>{recipe.title}</div>;
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
