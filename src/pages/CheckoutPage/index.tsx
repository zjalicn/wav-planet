import { ReactElement } from "react";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutCart from "./CheckoutCart";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { IProduct } from "../../interfaces";

interface IProps {
  products: IProduct[];
}

const CheckoutPage = ({ products }: IProps): ReactElement => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex py={[0, 5, 10]} direction={{ base: "column-reverse", md: "row" }}>
        <CheckoutDetails />
        <CheckoutCart products={products} />
      </Flex>
    </Container>
  );
};

export default CheckoutPage;
