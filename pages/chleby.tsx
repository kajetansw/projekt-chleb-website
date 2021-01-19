import useSWR from 'swr';
import { Heading } from '@chakra-ui/react';

import PageShell from '@/components/PageShell';
import { useAuth } from '@/lib/auth';
import firebasePostFetcher from '@/utils/firebasePostFetcher';
import RecipesGrid from '@/components/RecipesGrid';
import RecipeGridSkeleton from '@/components/RecipeGridSkeleton';

const BreadsPage = () => {
  const auth = useAuth();
  const { data: brightBreads } = useSWR(
    ['/api/recipes/tag?tag=cj', auth.user?.token],
    firebasePostFetcher({ tag: 'Chleb jasny' })
  );
  const { data: darkBreads } = useSWR(
    ['/api/recipes/tag?tag=cc', auth.user?.token],
    firebasePostFetcher({ tag: 'Chleb ciemny' })
  );
  const { data: sourdoughBreads } = useSWR(
    ['/api/recipes/tag?tag=cnz', auth.user?.token],
    firebasePostFetcher({ tag: 'Chleb na zakwasie' })
  );
  const { data: yeastBreads } = useSWR(
    ['/api/recipes/tag?tag=cnd', auth.user?.token],
    firebasePostFetcher({ tag: 'Chleb na drożdżach' })
  );

  return (
    <PageShell title="Projekt Chleb - Chleby">
      <Heading fontSize={30} fontWeight="200" mb={3}>
        Chleby jasne
      </Heading>
      {brightBreads ? <RecipesGrid recipes={brightBreads}></RecipesGrid> : <RecipeGridSkeleton />}

      <Heading fontSize={30} fontWeight="200" mt={24} mb={3}>
        Chleby ciemne
      </Heading>
      {darkBreads ? <RecipesGrid recipes={darkBreads}></RecipesGrid> : <RecipeGridSkeleton />}

      <Heading fontSize={30} fontWeight="200" mt={24} mb={3}>
        Chleby na zakwasie
      </Heading>
      {sourdoughBreads ? (
        <RecipesGrid recipes={sourdoughBreads}></RecipesGrid>
      ) : (
        <RecipeGridSkeleton />
      )}

      <Heading fontSize={30} fontWeight="200" mt={24} mb={3}>
        Chleby na drożdżach
      </Heading>
      {yeastBreads ? <RecipesGrid recipes={yeastBreads}></RecipesGrid> : <RecipeGridSkeleton />}
    </PageShell>
  );
};

export default BreadsPage;
