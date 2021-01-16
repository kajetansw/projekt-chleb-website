import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import { GetStaticPropsResult } from 'next';

import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import { dummyRecipes } from 'DUMMY_DATA';
import RecipesGrid from '@/components/RecipesGrid';
import Footer from '@/components/Footer';
import { Recipe } from '@/models';
import { getPopularRecipes } from '@/lib/db-admin';

interface HomeProps {
  popularRecipes: Recipe[];
}

export const Home = ({ popularRecipes }: HomeProps): JSX.Element => {
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
        <Gallery recipes={popularRecipes}></Gallery>

        <Heading fontSize={30} fontWeight="200" mt={16} mb={3}>
          Ostatnio dodane
        </Heading>
        <RecipesGrid recipes={dummyRecipes} maxItems={6}></RecipesGrid>

        <Footer mt={20} mb={8}></Footer>
      </main>
    </>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ popularRecipes: Recipe[] }>
> {
  const popularRecipes = await getPopularRecipes(3);

  return {
    props: {
      popularRecipes,
    },
    revalidate: 1,
  };
}

export default Home;
