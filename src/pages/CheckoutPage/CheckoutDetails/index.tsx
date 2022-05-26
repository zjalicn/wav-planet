import { ReactElement } from "react";
import {
  VStack,
  Heading,
  Text,
  Link,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CheckoutDetails = (): ReactElement => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" p={10} spacing={10} textAlign="left">
      <VStack spacing={3} alignItems="center">
        <Heading size="2xl">Your Details</Heading>
        <Text>
          If you already have an account, click{" "}
          <Link as={RouterLink} to="/login" color="blue.400">
            here
          </Link>{" "}
          to log in
        </Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="21 Broken Dreams Blvd" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="can">Canada</option>
              <option value="uk">United Kingdom</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            size="lg"
            w="full"
            variant="primary"
            loadingText="Submitting"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default CheckoutDetails;
