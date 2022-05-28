import { ReactElement } from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { CartItem } from "../../../components";
import { IProduct } from "../../../interfaces";

interface IProps {
  products: IProduct[];
}

const CheckoutCart = ({ products }: IProps): ReactElement => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  const calculateSubtotal = (cart: IProduct[]) => {
    let subtotalCost = 0;
    cart.forEach((product) => (subtotalCost += product.price));
    return subtotalCost;
  };
  const calculateShipping = (cart: IProduct[]) => {
    let shippingCost = 19.0;
    return shippingCost;
  };
  const calculateTaxes = (cart: IProduct[]) => {
    let taxesCost = 23.8;
    return taxesCost;
  };
  const calculateTotal = () => {
    let totalCost = 162.79;
    return totalCost;
  };

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your Cart</Heading>
      </VStack>
      {products.map((p, index) => (
        <CartItem key={`cart-item-${index}`} product={p} />
      ))}
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Heading size="sm">${calculateSubtotal(products).toFixed()}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Shipping</Text>
          <Heading size="sm">${calculateShipping(products).toFixed()}</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Taxes (estimated)</Text>
          <Heading size="sm">${calculateTaxes(products).toFixed()}</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text>Total</Text>
          <Heading size="lg">${calculateTotal().toFixed()}</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CheckoutCart;
