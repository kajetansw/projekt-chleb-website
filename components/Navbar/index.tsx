import { Button, Flex, Image } from '@chakra-ui/react';
import NavbarLink from '@/components/NavbarLink';
import Link from 'next/link';

const Navbar = () => (
  <Flex
    as="nav"
    height={24}
    mb={8}
    justifyContent="space-between"
    fontFamily="'Nunito', sans-serif"
    fontSize="14px"
  >
    <Flex alignItems="center">
      <Link href="/">
        <a>
          <Image src="./logo.PNG" height={9} mr={28} />
        </a>
      </Link>

      <NavbarLink href="/">PIERWSZE KROKI</NavbarLink>
      <NavbarLink href="/">CHLEBY</NavbarLink>
      <NavbarLink href="/">DESERY</NavbarLink>
      <NavbarLink href="/">INNE WYPIEKI</NavbarLink>
      <NavbarLink href="/">O MNIE</NavbarLink>
    </Flex>

    <Flex alignItems="center">
      <Image src="./user.png" height={10} borderRadius="full" />
      <Button variant="ghost" size="md" px={2} fontSize="inherit">
        ZALOGUJ
      </Button>
    </Flex>
  </Flex>
);

export default Navbar;
