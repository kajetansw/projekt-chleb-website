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
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Recipe } from '@/models';
import LikeIcon from '@/components/LikeIcon';
import TitleHeading from '@/components/TitleHeading';
import ResponsiveImage from '@/components/ResponsiveImage';
import IconBadge from '@/components/IconBadge';
import formatMinutes from '@/utils/formatMinutes';
import StyledLink from '@/components/StyledLink';

interface GalleryProps {
  recipes: Recipe[];
}

const useCroppedRecipeInstruction = (recipeInstruction: string) => {
  const charLimit = useBreakpointValue({ base: 300, lg: 400, xl: 600 }) || 400;
  return recipeInstruction.slice(0, charLimit) + '...';
};

const Gallery = ({ recipes }: GalleryProps): JSX.Element => {
  if (!recipes?.length) {
    return <Heading>Brak przepisów!</Heading>;
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
          <IconBadge
            IconComponent={TimeIcon}
            iconColor="#27ae60"
            color="#707070"
            iconSize={5}
            fontSize={14}
            mr={5}
          >
            {formatMinutes(recipes[viewedRecipeIdx].timeOfPreparationInMins)}
          </IconBadge>
          <IconBadge
            IconComponent={LikeIcon}
            iconColor="#ECC94B"
            color="#707070"
            iconSize={6}
            fontSize={14}
          >
            {recipes[viewedRecipeIdx].likes.length}
          </IconBadge>

          <StyledLink href={'p/' + recipes[viewedRecipeIdx].uid}>
            <TitleHeading my={6} fontSize={36}>
              {recipes[viewedRecipeIdx].title}
            </TitleHeading>
          </StyledLink>

          {recipes[viewedRecipeIdx].ingredientSections.map((section) => (
            <Box key={section.title} mb={4}>
              <Heading fontSize={17}>{section.title}</Heading>
              <UnorderedList fontSize={17} mb={6}>
                {section.ingredients.map((i) => (
                  <ListItem key={i}>{i}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}

          <Text fontSize={17} color="#828282" whiteSpace="pre-wrap" textAlign="justify">
            {croppedRecipeInstruction}
          </Text>
        </Box>

        <Flex position="relative" alignSelf="center">
          <StyledLink href={'p/' + recipes[viewedRecipeIdx].uid}>
            <ResponsiveImage
              width={{ base: 625, lg: 1000 }}
              height={{ base: 500, lg: 800 }}
              src={recipes[viewedRecipeIdx].imageSrc}
              objectFit="cover"
            ></ResponsiveImage>
          </StyledLink>
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
