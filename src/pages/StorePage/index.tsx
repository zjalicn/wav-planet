import { ReactElement, useState } from "react";
import { Flex } from "@chakra-ui/react";

import ProductView from "./ProductView";
import Sidebar from "./Sidebar";
import { IProduct } from "../../interfaces";
import { CategoryTypes } from "../../helpers";

interface IProps {
  products: IProduct[];
}

const StorePage = ({ products }: IProps): ReactElement => {
  const [activeCategory, setActiveCategory] = useState<CategoryTypes>("All");
  return (
    <Flex w="full" h="100vh">
      <Sidebar category={activeCategory} setCategory={setActiveCategory} />
      <ProductView products={products} activeCategory={activeCategory} />
    </Flex>
  );
};

export default StorePage;
