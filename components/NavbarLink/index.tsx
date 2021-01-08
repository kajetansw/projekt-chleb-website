import { Link as StyledLink } from '@chakra-ui/react';
import Link from 'next/link';

const NavbarLink = ({ children, href }) => (
  <Link href={href}>
    <StyledLink display={{ base: 'block', lg: 'initial' }} mr={[0, 0, 0, 8]} mb={[1, 1, 1, 0]}>
      {children}
    </StyledLink>
  </Link>
);

export default NavbarLink;
