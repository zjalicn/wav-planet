import { ReactElement } from "react";
import { Text, Flex, Image, AspectRatio } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
}

const StoreItem = ({ product }: IProps): ReactElement => {
  const { id, name, price, onSale, salePrice, imageSrc } = product;
  return (
    <Flex flexDir="column" p={2}>
      <AspectRatio
        w="200px"
        ratio={3 / 4}
        as={RouterLink}
        to={`/product/${id}`}
      >
        <Image
          src={require(`../../images/${imageSrc}.jpg`)}
          alt="Product Art"
          objectFit="cover"
        />
      </AspectRatio>
      <Flex justify={"space-between"}>
        <Text fontWeight="bold">{name}</Text>
        {onSale && (
          <Text fontWeight={"bold"} color="red.500">
            SALE
          </Text>
        )}
      </Flex>
      <Flex justify={"space-between"}>
        <Text as={onSale ? "s" : "abbr"}>${price} USD</Text>
        {onSale && <Text fontWeight="bold">${salePrice} USD</Text>}
      </Flex>
    </Flex>
  );
};

export default StoreItem;
