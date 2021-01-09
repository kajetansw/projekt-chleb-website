import { useState } from 'react';
import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { SpaceProps } from '@chakra-ui/styled-system';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Recipe } from '@/models';
import LikeIcon from '@/components/LikeIcon';
import TitleHeading from '@/components/TitleHeading';

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

const GalleryImage = (props: Omit<NextImageProps, 'width' | 'height'>) => {
  const width = useBreakpointValue({ base: 625, lg: 1000 }) || 0;
  const height = useBreakpointValue({ base: 500, lg: 800 }) || 0;

  return <NextImage {...props} width={width} height={height} />;
};

const useCroppedRecipeInstruction = (recipeInstruction: string) => {
  const charLimit = useBreakpointValue({ base: 400, lg: 600, xl: 1000 }) || 400;
  return recipeInstruction.slice(0, charLimit) + '...';
};

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
  const croppedRecipeInstruction = useCroppedRecipeInstruction(
    recipes[viewedRecipeIdx].instruction
  );

  return (
    <>
      <Flex
        direction={['column-reverse', 'column-reverse', 'row']}
        w="full"
        justify="space-between"
        border="1px solid #cdcdcd"
      >
        <Box w={['initial', 'initial', '50%', '50%']} my={[4, 6, 8]} mx={[5, 8, 10]}>
          <PreparationTimeBadge
            timeOfPreparationInMins={recipes[viewedRecipeIdx].timeOfPreparationInMins}
            mr={5}
          ></PreparationTimeBadge>
          <LikesBadge likes={recipes[viewedRecipeIdx].likes}></LikesBadge>
          <TitleHeading my={6} fontSize={36}>
            {recipes[viewedRecipeIdx].title}
          </TitleHeading>

          <UnorderedList fontSize={18} mb={6}>
            {recipes[viewedRecipeIdx].ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>

          <Text color="#828282" whiteSpace="pre-wrap" textAlign="justify">
            {croppedRecipeInstruction}
          </Text>
        </Box>

        <Flex position="relative" alignSelf="center">
          <GalleryImage src={recipes[viewedRecipeIdx].imageSrc} objectFit="cover"></GalleryImage>
          <Button
            variant="ghost"
            p={0}
            top="50%"
            left="0"
            color="#fff"
            position="absolute"
            transform="translate(0, -50%)"
            _hover={{ bg: '#ebedf059' }}
            onClick={previousRecipe}
          >
            <ChevronLeftIcon h={16} w={16}></ChevronLeftIcon>
          </Button>
          <Button
            variant="ghost"
            p={0}
            top="50%"
            right="0"
            color="#fff"
            position="absolute"
            transform="translate(0, -50%)"
            _hover={{ bg: '#ebedf059' }}
            onClick={nextRecipe}
          >
            <ChevronRightIcon h={16} w={16}></ChevronRightIcon>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Gallery;