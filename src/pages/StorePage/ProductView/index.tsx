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
      justifyContent="space-between"
      w="full"
      p={3}
      h="min-content"
      overflow="hidden"
    >
      {products.map(
        (p) =>
          isInCategory(activeCategory, p.categories) && (
            <StoreItem name={p.name} price={p.price} />
          )
      )}
    </Flex>
  );
};

export default ProductView;
