import { Box, Flex, Grid, SpaceProps, Link as ChakraLink } from '@chakra-ui/react';
import FacebookIcon from '@/components/FacebookIcon';
import InstagramIcon from '@/components/InstagramIcon';
import TwitterIcon from '@/components/TwitterIcon';
import Link from 'next/link';

const StyledLink = ({ children, href }) => (
  <Link href={href}>
    <ChakraLink href={href} target="_blank" rel="noopener" cursor="pointer">
      {children}
    </ChakraLink>
  </Link>
);

const Footer = ({ ...spaceProps }: SpaceProps) => {
  return (
    <>
      <Flex {...spaceProps} justify="space-between">
        <Box fontSize={18} fontWeight="600">
          &copy; {new Date().getFullYear()}, Ewa Pojasek
        </Box>

        <Grid gridGap={5} gridTemplateColumns="1fr 1fr 1fr">
          <StyledLink href="http://twitter.com">
            <TwitterIcon color="#000" width={6} height={6}></TwitterIcon>
          </StyledLink>
          <StyledLink href="http://facebook.com">
            <FacebookIcon color="#000" width={6} height={6}></FacebookIcon>
          </StyledLink>
          <StyledLink href="http://instagram.com">
            <InstagramIcon color="#000" width={6} height={6}></InstagramIcon>
          </StyledLink>
        </Grid>
      </Flex>
    </>
  );
};

export default Footer;
