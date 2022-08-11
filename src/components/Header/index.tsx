import { HStack, Image, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <HStack h="10vh" w="full" justify="space-between" maxW="container.lg">
      <Image src="/creditas-logo.png" h="72px" />
      <Text>Ajuda</Text>
    </HStack>
  );
};
