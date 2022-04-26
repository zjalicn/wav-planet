import { ReactElement } from "react";
import { Text, Flex, Image, AspectRatio } from "@chakra-ui/react";

interface IProps {
  name: string;
  price: number;
}

const StoreItem = ({ name, price }: IProps): ReactElement => {
  return (
    <Flex flexDir="column" p={2}>
      <AspectRatio w="200px" ratio={3 / 4}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="Product Art"
          objectFit="cover"
        />
      </AspectRatio>
      <Text fontWeight="bold">{name}</Text>
      <Text>${price} USD</Text>
    </Flex>
  );
};

export default StoreItem;
