import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

import { ColorModeSwitcher, NavMenu } from "../";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Nav = () => {
  return (
    <>
      <Box
        as="header"
        pos="sticky"
        top={0}
        w="100%"
        p={3}
        bg={useColorModeValue("gray.100", "gray.900")}
        verticalAlign={"center"}
        zIndex={20}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize="2xl" p={1}>
            WavPlanet
          </Text>

          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <ColorModeSwitcher />
              <IconButton
                icon={<FaShoppingCart />}
                variant="ghost"
                aria-label="Cart"
              ></IconButton>
              <NavMenu />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
