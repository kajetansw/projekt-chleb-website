import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavbarLink from '@/components/NavbarLink';
import AddRecipeModal from '@/components/AddRecipeModal';
import { useAuth } from '@/lib/auth';

const AuthButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => (
  <Button variant="ghost" px={2} fontSize="inherit" onClick={onClick}>
    {children}
  </Button>
);

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => setIsMenuVisible((prev) => !prev);
  const auth = useAuth();

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
          <NavbarLink href="/pierwsze-kroki">PIERWSZE KROKI</NavbarLink>
          <NavbarLink href="/chleby">CHLEBY</NavbarLink>
          <NavbarLink href="/desery">DESERY</NavbarLink>
          <NavbarLink href="/inne-wypieki">INNE WYPIEKI</NavbarLink>
          <NavbarLink href="/o-mnie">O MNIE</NavbarLink>
        </Box>

        <Box mt={[8, 8, 8, 0]}>
          {auth.user?.admin && <AddRecipeModal />}

          <Image
            display="inline"
            src={auth?.user?.photoURL ?? '/user.png'}
            height={10}
            borderRadius="full"
          />

          {auth?.user ? (
            <AuthButton onClick={() => auth.signout()}>WYLOGUJ</AuthButton>
          ) : (
            <AuthButton onClick={() => auth.signinWithFacebook()}>ZALOGUJ</AuthButton>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
