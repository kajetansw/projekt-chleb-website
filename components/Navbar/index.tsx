import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import NavbarLink from '@/components/NavbarLink';
import NextLink from 'next/link';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => setIsMenuVisible((prev) => !prev);

  return (
    <Flex
      as="nav"
      mt={8}
      mb={isMenuVisible ? 4 : 12}
      justify={'flex-start'}
      fontFamily="'Nunito', sans-serif"
      fontSize="14px"
      direction={['column', 'column', 'column', 'row']}
    >
      <Flex justify="space-between">
        <NextLink href="/">
          <Link fontFamily="'Rye', cursive" fontSize={22} whiteSpace="pre" pt={1}>
            PROJEKT CHLEB
          </Link>
        </NextLink>

        <Button display={{ base: 'inherit', lg: 'none' }} onClick={toggleMenu} variant="ghost">
          {isMenuVisible ? <CloseIcon h={3} w={3} /> : <HamburgerIcon h={4} w={4} />}
        </Button>
      </Flex>

      <Flex
        display={{ base: isMenuVisible ? 'inherit' : 'none', lg: 'inherit' }}
        align="center"
        justify="space-between"
        direction={['column', 'column', 'column', 'row']}
        textAlign={isMenuVisible ? 'center' : 'initial'}
        mt={[4, 4, 4, 0]}
        py={[4, 4, 4, 0]}
        width="full"
        ml={[0, 0, 0, 20]}
      >
        <Box>
          <NavbarLink href="/">PIERWSZE KROKI</NavbarLink>
          <NavbarLink href="/">CHLEBY</NavbarLink>
          <NavbarLink href="/">DESERY</NavbarLink>
          <NavbarLink href="/">INNE WYPIEKI</NavbarLink>
          <NavbarLink href="/">O MNIE</NavbarLink>
        </Box>

        <Box mt={[8, 8, 8, 0]}>
          <Image display="inline" src="./user.png" height={10} borderRadius="full" />
          <Button variant="ghost" px={2} fontSize="inherit">
            ZALOGUJ
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
