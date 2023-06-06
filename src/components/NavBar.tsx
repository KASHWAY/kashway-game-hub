import { HStack, Image } from "@chakra-ui/react";
import logoGameHub from "../assets/logo-game-hub.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logoGameHub} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
