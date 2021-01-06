import Navbar from '@/components/Navbar';
import { Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Projekt Chleb</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar></Navbar>

    <main>
      <Heading as="h1" size="2xl">
        Hello there!
      </Heading>
      <Heading as="h3" size="md">
        Hello there!
      </Heading>

      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ea, eaque ipsum ex in cum.
      </Text>
    </main>
  </>
);

export default Home;
