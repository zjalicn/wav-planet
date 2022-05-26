import { ReactElement } from "react";
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Stack,
  IconButton,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import { ColorModeSwitcher, NavMenu } from "../";
import useAuth from "../../hooks/useAuth";
import Logo from "../../images/logo.png";
import LogoInverted from "../../images/logo-inverted.png";

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

const Nav = (): ReactElement => {
  const { auth } = useAuth();

  return (
    <Box
      as="header"
      pos="sticky"
      top={0}
      w="100%"
      h="8vh"
      p={3}
      bg={useColorModeValue("gray.100", "gray.900")}
      verticalAlign={"center"}
      zIndex={20}
      boxShadow="md"
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} h="100%">
        <Link as={RouterLink} to="/store">
          <AspectRatio w={12} ratio={1}>
            <Image src={useColorModeValue(Logo, LogoInverted)} alt="Logo" />
          </AspectRatio>
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"}>
            <ColorModeSwitcher />
            <IconButton
              icon={<FaShoppingCart />}
              variant="ghost"
              aria-label="Cart"
              as={Link}
              href="/checkout"
            ></IconButton>
            {auth?.user ? (
              <NavMenu />
            ) : (
              <Link as={RouterLink} to="/login">
                Log In
              </Link>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
