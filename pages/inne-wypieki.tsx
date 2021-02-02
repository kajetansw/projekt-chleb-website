import useSWR from 'swr';
import { Heading } from '@chakra-ui/react';

import PageShell from '@/components/PageShell';
import { useAuth } from '@/lib/auth';
import firebasePostFetcher from '@/utils/firebasePostFetcher';
import RecipesGrid from '@/components/RecipesGrid';
import RecipeGridSkeleton from '@/components/RecipeGridSkeleton';

const OtherBakingsPage = () => {
  const auth = useAuth();
  const { data: rolls } = useSWR(
    ['/api/recipes/tag?tag=r', auth.user?.token],
    firebasePostFetcher({ tag: 'Bułka' })
  );
  const { data: snacks } = useSWR(
    ['/api/recipes/tag?tag=s', auth.user?.token],
    firebasePostFetcher({ tag: 'Przekąska' })
  );

  return (
    <PageShell title="Projekt Chleb - Inne wypieki">
      <Heading fontSize={30} fontWeight="200" mb={3}>
        Bułki
      </Heading>
      {rolls ? <RecipesGrid recipes={rolls}></RecipesGrid> : <RecipeGridSkeleton />}

      <Heading fontSize={30} fontWeight="200" mt={24} mb={3}>
        Przekąski
      </Heading>
      {snacks ? <RecipesGrid recipes={snacks}></RecipesGrid> : <RecipeGridSkeleton />}
    </PageShell>
  );
};

export default OtherBakingsPage;
