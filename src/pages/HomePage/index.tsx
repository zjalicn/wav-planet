import { ReactElement } from "react";
import {
  Text,
  Flex,
  Link,
  AspectRatio,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../images/logo.png";
import LogoInverted from "../../images/logo-inverted.png";

const HomePage = (): ReactElement => {
  return (
    <Flex
      minH={"100vh"}
      w="full"
      align={"center"}
      justify={"center"}
      flexDir="column"
    >
      <AspectRatio w={"sm"} ratio={1}>
        <Image src={useColorModeValue(Logo, LogoInverted)} alt="Logo" />
      </AspectRatio>
      <Link as={RouterLink} to="/store">
        <Text fontSize="2xl">Continue To Store {`>`}</Text>
      </Link>
    </Flex>
  );
};

export default HomePage;
