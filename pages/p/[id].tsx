import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { Recipe } from '@/models';
import { getAllRecipes, getRecipeWithId } from '@/lib/db-admin';
import PageShell from '@/components/PageShell';
import ResponsiveImage from '@/components/ResponsiveImage';
import TitleHeading from '@/components/TitleHeading';
import IconBadge from '@/components/IconBadge';
import formatMinutes from '@/utils/formatMinutes';
import TagIcon from '@/components/TagIcon';
import LikeIcon from '@/components/LikeIcon';
import { addLike, removeLike } from '@/lib/db';
import { useAuth } from '@/lib/auth';

interface RecipeProps {
  recipe: Recipe | undefined;
}

const RecipeView = ({ recipe }: RecipeProps) => {
  const router = useRouter();

  if (!recipe) {
    return (
      <PageShell title="Nie ma takiego przepisu!">
        <Heading>Nie ma takiego przepisu!</Heading>
      </PageShell>
    );
  }
  if (router.isFallback) {
    return (
      <PageShell title="Ładowanie...">
        <Heading>Ładowanie...</Heading>
      </PageShell>
    );
  }

  return (
    <PageShell title={recipe.title}>
      <ResponsiveImage
        src={recipe.imageSrc}
        width={{ base: 600, sm: 1000, md: 3000 }}
        height={{ base: 525, sm: 400, md: 800 }}
        objectFit="cover"
      ></ResponsiveImage>

      <TitleHeading fontSize={42} mt={10} mb={4}>
        {recipe.title}
      </TitleHeading>
      <Flex direction={['column', 'row']}>
        <IconBadge
          IconComponent={TimeIcon}
          color="#000000"
          fontSize={18}
          iconColor="#27AE60"
          iconSize={7}
          mr={6}
        >
          {formatMinutes(recipe.timeOfPreparationInMins)}
        </IconBadge>
        <IconBadge
          my={[4, 0]}
          IconComponent={TagIcon}
          color="#000000"
          fontSize={18}
          iconColor="#2D9CDB"
          iconSize={7}
          mr={6}
        >
          {recipe.tags.join(', ')}
        </IconBadge>
        <LikeBadgeButton recipe={recipe} />
      </Flex>

      <Flex direction={['column', 'column', 'row']} mt={12}>
        <Box flexBasis="33%" mr={14} mb={[8, 8, 0]}>
          <Heading fontSize={24} mb={5}>
            Składniki
          </Heading>
          <UnorderedList fontSize={18}>
            {recipe.ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box flexBasis="67%">
          <Heading fontSize={24} mb={5}>
            Przygotowanie
          </Heading>
          <Text whiteSpace="pre-wrap" textAlign="justify" fontSize={18}>
            {recipe.instruction}
          </Text>
        </Box>
      </Flex>
    </PageShell>
  );
};

interface LikeBadgeButtonProps {
  recipe: Recipe;
}

const LikeBadgeButton = ({ recipe }: LikeBadgeButtonProps) => {
  const auth = useAuth();
  const { data } = useSWR('/api/recipes/likes?uid=' + recipe.uid);
  const [likes, setLikes] = useState<Recipe['likes']>([]);
  const onClick = () => {
    if (likes && auth.user) {
      if (likes.some((like) => like.userId === auth.user?.uid)) {
        removeLike(recipe, auth.user.uid);
        setLikes((ls) => ls.filter((like) => like.userId !== auth.user?.uid));
      } else {
        addLike(recipe, auth.user.uid);
        setLikes((ls) => [...ls, { userId: auth.user.uid }]);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setLikes(data as Recipe['likes']);
    }
  }, [data]);

  return (
    <IconBadge
      IconComponent={LikeIcon}
      color="#000000"
      fontSize={18}
      iconColor={likes && likes.some((l) => l.userId === auth.user?.uid) ? '#F2C94C' : '#CDCDCD'}
      iconSize={7}
      mr={6}
      cursor={auth.user ? 'pointer' : 'initial'}
      onClick={auth.user ? onClick : undefined}
    >
      {likes.length}
    </IconBadge>
  );
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
