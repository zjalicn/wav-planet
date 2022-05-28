import { ReactElement, useState, useEffect } from "react";
import axios from "axios";
import { Flex, Spinner } from "@chakra-ui/react";

import ProductView from "./ProductView";
import Sidebar from "./Sidebar";
import { CategoryTypes, API_URL } from "../../helpers";

const StorePage = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState<CategoryTypes>("All");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/product/get`).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  if (products.length === 0)
    return (
      <Flex
        w="full"
        h="100vh"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="center"
      >
        <Spinner size="xl" />
      </Flex>
    );

  return (
    <Flex w="full" h="100vh" flexDir={{ base: "column", sm: "row" }}>
      <Sidebar category={activeCategory} setCategory={setActiveCategory} />
      <ProductView products={products} activeCategory={activeCategory} />
    </Flex>
  );
};

export default StorePage;
