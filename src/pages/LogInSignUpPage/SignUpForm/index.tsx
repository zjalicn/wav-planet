import { ReactElement, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface IProps {
  toast: Function;
}

const SignUpForm = ({ toast }: IProps): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toast({
      title: "Sign Up Failed",
      status: "error",
    });
    // try {
    //   // try to login via axios, if successful get accesstoken and roles form response.data
    //   setEmail("");
    //   setPassword("");
    // } catch (err: any) {
    //   if (!err?.response) {
    //     setErrorMsg("No Server Response");
    //   } else if (err.response?.status === 400) {
    //     setErrorMsg("Missing Username or Password");
    //   } else {
    //     setErrorMsg("Login Failed");
    //   }
    // }
  };

  return (
    <Stack spacing={2}>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
        <Button
          loadingText="Submitting"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUpForm;
