import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import useSWR from 'swr';

import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import RecipesGrid from '@/components/RecipesGrid';
import Footer from '@/components/Footer';
import firebaseFetcher from '@/utils/firebaseFetcher';
import GallerySkeleton from '@/components/GallerySkeleton';
import RecipeGridSkeleton from '@/components/RecipeGridSkeleton';

export const Home = (): JSX.Element => {
  const { data: popularRecipes } = useSWR('/api/recipes/popular?amount=3', firebaseFetcher);
  const { data: newestRecipes } = useSWR('/api/recipes/newest?amount=6', firebaseFetcher);

  return (
    <>
      <Head>
        <title>Projekt Chleb</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main>
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

        <Footer mt={20} mb={8}></Footer>
      </main>
    </>
  );
};

export default Home;
