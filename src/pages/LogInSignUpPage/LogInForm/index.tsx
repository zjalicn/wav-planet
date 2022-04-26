import { ReactElement, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LogInForm = (): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack spacing={2}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={showPassword ? "text" : "password"} />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Stack spacing={2}>
        <Stack
          // direction={{ base: "column", sm: "row" }}
          // align={"start"}
          justify={"space-between"}
        >
          <Checkbox>Remember me</Checkbox>
          {/* <Link color={"blue.400"}>Forgot password?</Link> */}
        </Stack>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};

export default LogInForm;
