import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Head from 'next/head';
import { dummyRecipes } from 'DUMMY_DATA';

export const Home = (): JSX.Element => (
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
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar></Navbar>

    <main>
      <Gallery recipes={dummyRecipes}></Gallery>
    </main>
  </>
);

export default Home;
