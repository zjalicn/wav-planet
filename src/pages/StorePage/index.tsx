import { ReactElement, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ProductView from "./ProductView";
import Sidebar from "./Sidebar";
import { IProduct } from "../../interfaces";

interface IProps {
  products: IProduct[];
}

type CategoryTypes =
  | "All"
  | "Bundles"
  | "Drum Kits"
  | "Loop Kits"
  | "MIDI Kits"
  | "Preset Kits"
  | "Vocal Kits";

const StorePage = ({ products }: IProps): ReactElement => {
  const [activeCategory, setActiveCategory] = useState<CategoryTypes>("All");
  return (
    <Flex w="full">
      <Sidebar category={activeCategory} setCategory={setActiveCategory} />
      <ProductView products={products} activeCategory={activeCategory} />
    </Flex>
  );
};

export default StorePage;
