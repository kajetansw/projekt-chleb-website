import { Heading } from '@chakra-ui/react';
import useSWR from 'swr';

import Gallery from '@/components/Gallery';
import RecipesGrid from '@/components/RecipesGrid';
import firebaseFetcher from '@/utils/firebaseFetcher';
import GallerySkeleton from '@/components/GallerySkeleton';
import RecipeGridSkeleton from '@/components/RecipeGridSkeleton';
import PageShell from '@/components/PageShell';
import { useAuth } from '@/lib/auth';

export const Home = (): JSX.Element => {
  const auth = useAuth();
  const { data: popularRecipes } = useSWR(
    ['/api/recipes/popular?amount=3', auth.user?.token],
    firebaseFetcher
  );
  const { data: newestRecipes } = useSWR(
    ['/api/recipes/newest?amount=6', auth.user?.token],
    firebaseFetcher
  );

  return (
    <PageShell title="Projekt Chleb">
      <Heading fontSize={30} fontWeight="200" mb={3}>
        Najwyżej oceniane
      </Heading>
      {!popularRecipes ? (
        <GallerySkeleton></GallerySkeleton>
      ) : (
        <Gallery recipes={popularRecipes}></Gallery>
      )}

      <Heading fontSize={30} fontWeight="200" mt={16} mb={3}>
        Ostatnio dodane
      </Heading>
      {!newestRecipes ? (
        <RecipeGridSkeleton></RecipeGridSkeleton>
      ) : (
        <RecipesGrid recipes={newestRecipes} maxItems={6}></RecipesGrid>
      )}
    </PageShell>
  );
};

export default Home;
