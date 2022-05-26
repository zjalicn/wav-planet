import { ReactElement, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";

import useAuth from "../../../hooks/useAuth";

const LogInForm = (): ReactElement => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/store";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // try to login via axios, if successful get accesstoken and roles form response.data
      // encrypt password
      const accessToken = "accessToken";
      setAuth({ user: email, accessToken });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err: any) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else {
        setErrorMsg("Login Failed");
      }
    }
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
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Stack spacing={2}>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};

export default LogInForm;
