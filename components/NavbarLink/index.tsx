import StyledLink from '../StyledLink';

const NavbarLink = ({ children, href }) => (
  <StyledLink
    href={href}
    display={{ base: 'block', lg: 'initial' }}
    mr={[0, 0, 0, 8]}
    mb={[1, 1, 1, 0]}
  >
    {children}
  </StyledLink>
);

export default NavbarLink;
