import { LayoutProps, Link as ChakraLink, SpaceProps } from '@chakra-ui/react';
import Link from 'next/link';

type StyledLinkProps = SpaceProps &
  LayoutProps & {
    href: string;
    children: React.ReactNode;
  };

const StyledLink = ({ href, children, ...styleProps }: StyledLinkProps) => (
  <Link href={href}>
    <ChakraLink {...styleProps}>{children}</ChakraLink>
  </Link>
);

export default StyledLink;
