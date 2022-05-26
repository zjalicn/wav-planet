import { Flex, Text, AspectRatio, Image, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
}

const DownloadItem = ({ product }: IProps) => {
  const { name, imageSrc } = product;
  return (
    <Flex
      w="full"
      maxW="80%"
      justify="space-between"
      align="center"
      p={6}
      m={2}
      border="1px"
      borderColor="gray.200"
      borderRadius="4px"
    >
      <Flex align="center" w="full">
        <AspectRatio ratio={3 / 4} w="full" maxW={20}>
          <Image src={require(`../../images/${imageSrc}.jpg`)} alt="Product" />
        </AspectRatio>
        <Text fontSize="3xl" fontWeight="bold" px={4}>
          {name}
        </Text>
      </Flex>
      <IconButton
        aria-label="Download Button"
        icon={<FaDownload />}
        fontSize="28px"
        variant="ghost"
      />
    </Flex>
  );
};

export default DownloadItem;
