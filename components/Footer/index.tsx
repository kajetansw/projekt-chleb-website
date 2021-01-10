import { Box, Flex, SpaceProps } from '@chakra-ui/react';

const Footer = ({ ...spaceProps }: SpaceProps) => {
  return (
    <>
      <Flex {...spaceProps}>
        <Box fontSize={18} fontWeight="600">
          &copy; {new Date().getFullYear()}, Ewa Pojasek
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
