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
      w={{ base: "100vw", sm: "30vw" }}
      flexDir="column"
      alignContent="center"
      justifyContent="center"
      textAlign={{ base: "center", sm: "left" }}
      px={6}
      pt={{ base: 6, sm: 0 }}
    >
      {categories.map((c, index) => (
        <Text
          key={`sidebar-${index}`}
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
