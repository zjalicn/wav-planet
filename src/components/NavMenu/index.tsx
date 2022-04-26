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

const NavMenu = () => {
  const links = [
    { name: "Downloads" },
    { name: "Settings" },
    { name: "Log Out" },
  ];

  const user = { email: "user@email.com" };
  const { email } = user;

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
            <p>{email}</p>
          </Center>
        </Flex>
        <MenuDivider />
        {links.map((link) => (
          <MenuItem>{link.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
