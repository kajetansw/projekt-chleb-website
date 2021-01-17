import { Box, SkeletonText } from '@chakra-ui/react';

const GallerySkeleton = () => (
  <>
    <Box height={{ base: '80vh', lg: '70vh' }} border="1px solid #cdcdcd" p={5}>
      <SkeletonText mt={12} noOfLines={1} width={{ base: '50%', lg: '25%' }} />
      <SkeletonText mt={12} noOfLines={1} width={{ base: '50%', lg: '25%' }} />
      <SkeletonText mt={12} noOfLines={8} spacing="4" width={{ base: '100%', lg: '50%' }} />
    </Box>
  </>
);

export default GallerySkeleton;
