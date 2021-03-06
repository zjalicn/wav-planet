import { ReactElement } from "react";
import {
  Flex,
  Box,
  Stack,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useToast,
} from "@chakra-ui/react";

import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const LogInSignUpPage = (): ReactElement => {
  const toast = useToast({
    position: "top-right",
    duration: 4000,
    isClosable: true,
    variant: "subtle",
    containerStyle: {
      width: "400px",
    },
  });

  return (
    <Flex
      minH={"100vh"}
      w="full"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} minW="md" py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Tabs isFitted>
            <TabList>
              <Tab>Log In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <LogInForm toast={toast} />
              </TabPanel>
              <TabPanel>
                <SignUpForm toast={toast} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LogInSignUpPage;
