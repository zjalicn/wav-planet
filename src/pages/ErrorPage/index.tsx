import { ReactElement } from "react";
import { Link, Flex } from "@chakra-ui/react";

const ErrorPage = (): ReactElement => {
  return (
    <Flex minH={"100vh"} w="full" align={"center"} justify={"center"}>
      <Link>Error</Link>
    </Flex>
  );
};

export default ErrorPage;
