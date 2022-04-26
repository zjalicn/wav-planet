import { ReactElement } from "react";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutCart from "./CheckoutCart";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { IProduct } from "../../interfaces";

interface IProps {
  products: IProduct[];
}

const CheckoutPage = ({ products }: IProps): ReactElement => {
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <CheckoutDetails secondaryTextColor={secondaryTextColor} />
        <CheckoutCart
          products={products}
          secondaryTextColor={secondaryTextColor}
        />
      </Flex>
    </Container>
  );
};

export default CheckoutPage;
