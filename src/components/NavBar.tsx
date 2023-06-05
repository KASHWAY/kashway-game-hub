import { HStack, Image, Text } from "@chakra-ui/react";
import logoGameHub from "../assets/logo-game-hub.jpeg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logoGameHub} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
