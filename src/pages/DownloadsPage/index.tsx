import { ReactElement } from "react";
import { Heading, Flex, useColorModeValue } from "@chakra-ui/react";

import { DownloadItem } from "../../components";
import { IProduct } from "../../interfaces";

interface IProps {
  products: IProduct[];
}

const DownloadPage = ({ products }: IProps): ReactElement => {
  return (
    <Flex
      minH={"100vh"}
      w="full"
      align={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      flexDir="column"
      p={12}
    >
      <Heading pb={4}>Your Product Downloads</Heading>
      {products.map((product) => (
        <DownloadItem product={product} />
      ))}
    </Flex>
  );
};

export default DownloadPage;
