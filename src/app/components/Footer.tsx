import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
  Button,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import Image from "next/image";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"lg"}
      w={{ base: "1.7rem", md: "2.3rem" }}
      h={{ base: "1.7rem", md: "2.3rem" }}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <VStack>
      <Box
        maxW={"80%"}
        w={"100%"}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        borderRadius="3xl"
        mb={"1rem"}
        boxShadow={"lg"}
        mt={"-3rem"}
      >
        <Container
          as={Stack}
          maxW={"auto"}
          py={1}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <a href="/">
            <Image
              src="/navlogo.png"
              alt="panaverse"
              width="100"
              height="100"
            />
          </a>
          <Text textAlign={"center"} fontSize={{base:"xs", md:"lg"}}>© 2023 Panaverse DAO. All rights reserved</Text>
          <Stack direction={"row"} spacing={{base:"3", md:"5"}}>
            <SocialButton
              label={"Facebook"}
              href={"https://www.facebook.com/groups/panaverse"}
            >
              <FaFacebook />
            </SocialButton>

            <SocialButton
              label={"Youtube"}
              href={"https://www.youtube.com/@panaverse/streams"}
            >
              <FaYoutube />
            </SocialButton>

            <SocialButton
              label={"Github"}
              href={"https://github.com/panaverse"}
            >
              <FaGithub />
            </SocialButton>

            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/Panaverse_edu"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/piaicofficial/?hl=en"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </VStack>
  );
}
