import { ReactElement } from "react";
import { Text, Flex, Link, AspectRatio, Image } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../images/logo.png";

const HomePage = (): ReactElement => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Flex
      minH={"100vh"}
      w="full"
      align={"center"}
      justify={"center"}
      flexDir="column"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.8,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.05,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 0.1, max: 1 },
            },
          },
          detectRetina: true,
        }}
      />
      <ScaleFade initialScale={0.9} in>
        <AspectRatio w={"sm"} ratio={1} maxW={"80vw"}>
          <Image src={Logo} alt="Logo" />
        </AspectRatio>
      </ScaleFade>
      <Link as={RouterLink} to="/store" zIndex={20}>
        <Text fontSize="2xl" color="white">
          Continue To Store {`>`}
        </Text>
      </Link>
    </Flex>
  );
};

export default HomePage;
