import { ReactElement, useState } from "react";
import {
  Flex,
  Text,
  Heading,
  AspectRatio,
  Image,
  Divider,
  Spacer,
  Tag,
  Button,
  ButtonGroup,
  IconButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AudioPlayer } from "../../components";
import { IProduct } from "../../interfaces";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

interface IProps {
  product: IProduct;
}

const ProductPage = ({ product }: IProps): ReactElement => {
  const { name, description, price, onSale, salePrice, categories } = product;
  const [quantity, setQuantity] = useState<number>(1);

  const ProductDetails = () => (
    <UnorderedList>
      <ListItem>WAV Format (Works in all DAWs)</ListItem>
      <ListItem>100% Royalty-Free</ListItem>
      <ListItem>Instant Download via Email</ListItem>
    </UnorderedList>
  );

  return (
    <Flex w="full" flexWrap="wrap">
      <Flex w="50%" p={8} justifyContent="right">
        <AspectRatio w="full" ratio={3 / 4}>
          <Image src="https://bit.ly/naruto-sage" alt="Product" />
        </AspectRatio>
      </Flex>
      <Flex w="50%" p={12} justifyContent="left" flexDir="column">
        <Flex>
          <Heading size="2xl">{name}</Heading>
        </Flex>

        <Flex>
          <Text fontSize="4xl" as={onSale ? "s" : "abbr"} py={2}>
            ${price}
          </Text>
          {onSale && (
            <Text fontSize="4xl" p={2}>
              ${salePrice}
            </Text>
          )}
          <Spacer />
          {onSale && (
            <Text fontSize="4xl" py={2}>
              SALE
            </Text>
          )}
        </Flex>

        <Divider />

        <Flex p={2}>
          <ProductDetails />
        </Flex>

        <Flex pb={2}>
          <AudioPlayer />
        </Flex>

        <Flex flexDir="column">
          <ButtonGroup size="sm" variant="outline">
            <IconButton
              aria-label="Decrement quantity"
              icon={<FaMinus />}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            />

            <Button ml="-px" mr="-px" w="full" as="text" outline="none">
              {quantity}
            </Button>

            <IconButton
              aria-label="Increment quantity"
              icon={<FaPlus />}
              onClick={() => setQuantity(quantity + 1)}
            />
          </ButtonGroup>

          <Button leftIcon={<FaShoppingCart />} colorScheme="blue" my={2}>
            Add to Cart
          </Button>
        </Flex>

        <Flex>
          {categories.map((c) => (
            <Tag size="sm">{c}</Tag>
          ))}
        </Flex>
      </Flex>

      <Flex w="full" px={6} pb={12} flexDir="column">
        <Divider />
        <Flex w="full" px={6} justifyContent="left" flexDir="column">
          <Heading py={3}>Description</Heading>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductPage;
