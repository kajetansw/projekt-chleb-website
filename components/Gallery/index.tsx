import { useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { SpaceProps } from '@chakra-ui/styled-system';

import { Recipe } from '@/models';
import LikeIcon from '@/components/LikeIcon';

interface GalleryProps {
  recipes: Recipe[];
}

const AdditionalInfoText = ({ children }) => (
  <Text fontSize={14} display="inline-block" pl={2} color="#707070">
    {children}
  </Text>
);

const LikesBadge = ({ likes, ...spaceProps }: SpaceProps & { likes: number }) => (
  <Flex {...spaceProps} display="inline-block">
    <LikeIcon color="#f2c94c" height={6} width={6}></LikeIcon>
    <AdditionalInfoText>{likes}</AdditionalInfoText>
  </Flex>
);

const PreparationTimeBadge = ({
  timeOfPreparationInMins,
  ...spaceProps
}: SpaceProps & { timeOfPreparationInMins: number }) => (
  <Flex {...spaceProps} display="inline-block">
    <TimeIcon height={5} width={5} color="#27ae60"></TimeIcon>
    <AdditionalInfoText>{timeOfPreparationInMins}</AdditionalInfoText>
  </Flex>
);

const Gallery = ({ recipes }: GalleryProps): JSX.Element => {
  if (!recipes?.length) {
    return <Heading>No recipes found!</Heading>;
  }

  const [viewedRecipeIdx, setViewedRecipeIdx] = useState(0);
  const nextRecipe = () =>
    viewedRecipeIdx >= recipes.length - 1
      ? setViewedRecipeIdx(0)
      : setViewedRecipeIdx((curr) => curr + 1);
  const previousRecipe = () =>
    viewedRecipeIdx <= 0
      ? setViewedRecipeIdx(recipes.length - 1)
      : setViewedRecipeIdx((curr) => curr - 1);

  return (
    <>
      <PreparationTimeBadge
        timeOfPreparationInMins={recipes[viewedRecipeIdx].timeOfPreparationInMins}
        mr={5}
      ></PreparationTimeBadge>
      <LikesBadge likes={recipes[viewedRecipeIdx].likes}></LikesBadge>
      <Heading>{recipes[viewedRecipeIdx].title}</Heading>
    </>
  );
};

export default Gallery;
