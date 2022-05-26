import {
  VStack,
  HStack,
  Heading,
  Stack,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
}

const CartItem = ({ product }: IProps) => {
  const { name, price, imageSrc } = product;
  return (
    <HStack spacing={6} alignItems="center" w="full">
      <AspectRatio ratio={1} w={24}>
        <Image
          src={require(`../../images/${imageSrc}.jpg`)}
          alt="product image"
        />
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
        </VStack>
        <Heading size="sm" textAlign="end">
          ${price}
        </Heading>
      </Stack>
    </HStack>
  );
};

export default CartItem;
