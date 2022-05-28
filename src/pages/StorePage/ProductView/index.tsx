import { Flex } from "@chakra-ui/react";
import { StoreItem } from "../../../components";
import { IProduct } from "../../../interfaces";

interface IProps {
  products: IProduct[];
  activeCategory: string;
}

const ProductView = ({ products, activeCategory }: IProps) => {
  const isInCategory = (
    activeCategory: string,
    productCategories: string[]
  ) => {
    if (activeCategory === "All" || productCategories.includes(activeCategory))
      return true;
    return false;
  };

  return (
    <Flex
      flexWrap="wrap"
      justifyContent={{ base: "space-evenly" }}
      w="full"
      p={2}
      h="92vh"
      overflow="hidden"
      overflowY="scroll"
    >
      {products.map(
        (p, index) =>
          isInCategory(activeCategory, p.categories) && (
            <StoreItem product={p} key={`item-${index}`} />
          )
      )}
    </Flex>
  );
};

export default ProductView;
