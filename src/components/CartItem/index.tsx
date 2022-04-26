import {
  VStack,
  HStack,
  Heading,
  Stack,
  AspectRatio,
  Image,
  Text,
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
  textColor: string;
}

const CartItem = ({ product, textColor }: IProps) => {
  const { name, price } = product;
  return (
    <HStack spacing={6} alignItems="center" w="full">
      <AspectRatio ratio={1} w={24}>
        <Image src="/images/skateboard.png" alt="product image" />
      </AspectRatio>
      <Stack
        spacing={0}
        w="full"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack w="full" spacing={0} alignItems="start">
          <Heading size="md">{name}</Heading>
          <Text color={textColor}>PNYCOMP27541</Text>
        </VStack>
        <Heading size="sm" textAlign="end">
          ${price}
        </Heading>
      </Stack>
    </HStack>
  );
};

export default CartItem;
