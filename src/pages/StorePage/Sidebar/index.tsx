import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  category: string;
  setCategory: Function;
}

const Sidebar = ({ category, setCategory }: IProps) => {
  const categories = [
    "All",
    "Bundles",
    "Drum Kits",
    "Melody Kits",
    "MIDI Kits",
    "Preset Kits",
    "Vocal Kits",
  ];

  return (
    <Flex
      w="30vw"
      flexDir="column"
      alignContent="center"
      justifyContent="center"
      p={6}
    >
      {categories.map((c) => (
        <Text
          onClick={() => setCategory(c)}
          fontWeight={c === category ? "bold" : "normal"}
          cursor="pointer"
        >
          {c}
        </Text>
      ))}
    </Flex>
  );
};

export default Sidebar;
