import { ReactElement } from "react";
import {
  IconButton,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import { routes, defaultAuth } from "../../helpers";
import useAuth from "../../hooks/useAuth";

const NavMenu = (): ReactElement => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const { user } = auth;

  const logout = async () => {
    setAuth(defaultAuth);
    navigate("/store");
  };

  return (
    <Menu>
      <MenuButton as={IconButton} variant={"link"}>
        <Avatar size="xs" />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <Flex px={4}>
          <Center pr={2}>
            <Avatar size="sm" name="" />
          </Center>
          <Center>
            <p>{user}</p>
          </Center>
        </Flex>
        <MenuDivider />
        {routes.map((link, index) => (
          <MenuItem
            key={"MenuItem-" + index}
            as={RouterLink}
            to={`${link.path}`}
          >
            {link.name}
          </MenuItem>
        ))}
        <MenuItem key={"MenuItem-Logout"} onClick={() => logout()}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
