import { ReactElement } from "react";
import { Container, Flex } from "@chakra-ui/react";

import CheckoutDetails from "./CheckoutDetails";
import CheckoutCart from "./CheckoutCart";
import { products } from "../../helpers";

const CheckoutPage = (): ReactElement => {
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
