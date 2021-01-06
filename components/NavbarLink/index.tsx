import { Link as StyledLink } from '@chakra-ui/react';
import Link from 'next/link';

const NavbarLink = ({ children, href }) => (
  <Link href={href}>
    <StyledLink mr="2rem">{children}</StyledLink>
  </Link>
);

export default NavbarLink;
