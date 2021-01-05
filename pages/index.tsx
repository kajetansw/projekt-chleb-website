import { Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Projekt Chleb</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

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
  </div>
);

export default Home;
