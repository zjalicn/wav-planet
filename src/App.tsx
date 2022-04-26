import { ReactElement } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
  CheckoutPage,
  DownloadsPage,
  HomePage,
  LogInSignUpPage,
  ProductPage,
  StorePage,
} from "./pages";
import { Nav } from "./components";

import theme from "./theme";
import "./theme/styles.css";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur pulvinar nulla et feugiat. Aenean convallis nisi augue, eget viverra leo semper in. Nam velit dui, cursus sed dolor in, placerat consequat mi. Proin et sodales mauris, vel dignissim lacus. Sed quis magna nulla. Nam elementum, massa ut malesuada rutrum, ligula nisl ornare purus, vitae porta purus sapien in tortor. Maecenas at turpis maximus, tempus elit vitae, tempor ex. Suspendisse congue felis erat, eu sodales erat mollis id. Quisque ut nunc blandit, dignissim neque ut, ultricies libero.\n\nFusce euismod lectus dolor, ac hendrerit lorem auctor sed. Aliquam sodales imperdiet nibh. In at arcu ut nibh lacinia vestibulum. Curabitur eu faucibus tellus. Sed tempus est sit amet tellus porttitor interdum. Ut auctor lorem id pretium ultrices. Duis vitae volutpat erat, sit amet laoreet risus.\n\nVivamus placerat elementum augue ut lobortis. Nulla facilisi. In hac habitasse platea dictumst. Mauris sollicitudin rutrum massa ac interdum. Maecenas congue massa eu tellus egestas, non dapibus diam consequat. Quisque sit amet blandit turpis. Etiam maximus vehicula tortor, feugiat auctor nunc elementum eget. Etiam non lorem imperdiet, accumsan velit vitae, efficitur lectus. Aenean et tincidunt justo, non consectetur felis. In ullamcorper quam fringilla sem sollicitudin placerat. Integer elementum magna odio, nec egestas dui gravida id.";

export const App = (): ReactElement => {
  const products = [
    {
      name: "Drumkit Vol 1",
      description: loremIpsum,
      price: 30,
      onSale: true,
      salePrice: 10,
      categories: ["Drum Kits"],
    },
    {
      name: "Drumkit Vol 2",
      description: loremIpsum,
      price: 30,
      onSale: false,
      salePrice: 0,
      categories: ["Drum Kits"],
    },
    {
      name: "Melodies Vol 1",
      description: loremIpsum,
      price: 40,
      onSale: false,
      salePrice: 0,
      categories: ["Melody Kits"],
    },
    {
      name: "Melodies Vol 2",
      description: loremIpsum,
      price: 30,
      onSale: false,
      salePrice: 0,
      categories: ["Melody Kits"],
    },
    {
      name: "MIDI Vol 1",
      description: loremIpsum,
      price: 10,
      onSale: false,
      salePrice: 0,
      categories: ["MIDI Kits"],
    },
    {
      name: "MIDI Vol 2",
      description: loremIpsum,
      price: 15,
      onSale: false,
      salePrice: 0,
      categories: ["MIDI Kits"],
    },
    {
      name: "Vocal Sauce Vol 1",
      description: loremIpsum,
      price: 40,
      onSale: false,
      salePrice: 0,
      categories: ["Vocal Kits"],
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Flex w="full" h="full" flexDir="column">
        <Nav />
        {/* <CheckoutPage products={products} /> */}
        {/* <DownloadsPage products={products} /> */}
        {/* <HomePage /> */}
        {/* <LogInSignUpPage /> */}
        {/* <ProductPage product={products[0]} /> */}
        {/* <StorePage products={products} /> */}
      </Flex>
    </ChakraProvider>
  );
};
