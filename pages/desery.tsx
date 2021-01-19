import useSWR from 'swr';
import { Heading } from '@chakra-ui/react';

import PageShell from '@/components/PageShell';
import { useAuth } from '@/lib/auth';
import firebasePostFetcher from '@/utils/firebasePostFetcher';
import RecipesGrid from '@/components/RecipesGrid';
import RecipeGridSkeleton from '@/components/RecipeGridSkeleton';

const DessertsPage = () => {
  const auth = useAuth();
  const { data: desserts } = useSWR(
    ['/api/recipes/tag?tag=d', auth.user?.token],
    firebasePostFetcher({ tag: 'Deser' })
  );

  return (
    <PageShell title="Projekt Chleb - Desery">
      <Heading fontSize={30} fontWeight="200" mb={3}>
        Desery
      </Heading>
      {desserts ? <RecipesGrid recipes={desserts}></RecipesGrid> : <RecipeGridSkeleton />}
    </PageShell>
  );
};

export default DessertsPage;
