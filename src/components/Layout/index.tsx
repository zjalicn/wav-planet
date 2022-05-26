import { Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const Layout = (): ReactElement => {
  return (
    <main className="App">
      <Flex w="full" h="100vh" flexDir="column">
        <Nav />
        <Outlet />
      </Flex>
    </main>
  );
};

export default Layout;
