import { Box, Grid, Skeleton, SkeletonText } from '@chakra-ui/react';

const RecipeGridSkeleton = () => (
  <Grid templateColumns="repeat(auto-fill, minmax(220px, 1fr))" gridGap={10}>
    <Box>
      <Skeleton height={{ base: 320 }}></Skeleton>
      <SkeletonText mt={4} noOfLines={1} width="50%"></SkeletonText>
      <SkeletonText mt={4} noOfLines={1} width="100%"></SkeletonText>
    </Box>
    <Box>
      <Skeleton height={{ base: 320 }}></Skeleton>
      <SkeletonText mt={4} noOfLines={1} width="50%"></SkeletonText>
      <SkeletonText mt={4} noOfLines={1} width="100%"></SkeletonText>
    </Box>
    <Box>
      <Skeleton height={{ base: 320 }}></Skeleton>
      <SkeletonText mt={4} noOfLines={1} width="50%"></SkeletonText>
      <SkeletonText mt={4} noOfLines={1} width="100%"></SkeletonText>
    </Box>
    <Box>
      <Skeleton height={{ base: 320 }}></Skeleton>
      <SkeletonText mt={4} noOfLines={1} width="50%"></SkeletonText>
      <SkeletonText mt={4} noOfLines={1} width="100%"></SkeletonText>
    </Box>
    <Box>
      <Skeleton height={{ base: 320 }}></Skeleton>
      <SkeletonText mt={4} noOfLines={1} width="50%"></SkeletonText>
      <SkeletonText mt={4} noOfLines={1} width="100%"></SkeletonText>
    </Box>
    <Box>
      <Skeleton height={{ base: 320 }}></Skeleton>
      <SkeletonText mt={4} noOfLines={1} width="50%"></SkeletonText>
      <SkeletonText mt={4} noOfLines={1} width="100%"></SkeletonText>
    </Box>
  </Grid>
);

export default RecipeGridSkeleton;
