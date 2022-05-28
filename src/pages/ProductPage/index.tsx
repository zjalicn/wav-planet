import { ReactElement, useState, useEffect } from "react";
import axios from "axios";
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
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { AudioPlayer } from "../../components";
import { API_URL } from "../../helpers";

const ProductPage = (): ReactElement => {
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    onSale: false,
    salePrice: 0,
    categories: [],
    imageSrc: "undefined",
  });

  const { pid } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/product/get/${pid}`).then((response) => {
      console.log(response);
      setProduct(response.data.product);
    });
  }, [pid]);

  const { name, description, price, onSale, salePrice, categories, imageSrc } =
    product;

  const ProductDetails = () => (
    <UnorderedList>
      <ListItem key="li-1">WAV Format (Works in all DAWs)</ListItem>
      <ListItem key="li-2">100% Royalty-Free</ListItem>
      <ListItem key="li-3">Instant Download via Email</ListItem>
    </UnorderedList>
  );

  return (
    <Flex w="full" flexWrap="wrap">
      <Flex w="50%" p={8} justifyContent="right">
        <AspectRatio w="full" ratio={3 / 4}>
          <Image src={require(`../../images/${imageSrc}.jpg`)} alt="Product" />
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
            <Text fontSize="4xl" py={2} color="red.500">
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
            <Tag size="sm" key={`${c}-tag`}>
              {c}
            </Tag>
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
