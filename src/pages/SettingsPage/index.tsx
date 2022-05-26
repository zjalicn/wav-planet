import { ReactElement } from "react";
import { Flex, Heading } from "@chakra-ui/react";

const SettingsPage = (): ReactElement => {
  return (
    <Flex minH={"100vh"} w="full" align={"center"} justify={"center"}>
      <Heading>Settings</Heading>
    </Flex>
  );
};

export default SettingsPage;
