import { ReactElement } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Link, Flex } from "@chakra-ui/react";

const HomePage = (): ReactElement => {
  return (
    <Flex
      minH={"100vh"}
      w="full"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Link>Shop</Link>
    </Flex>
  );
};

export default HomePage;
