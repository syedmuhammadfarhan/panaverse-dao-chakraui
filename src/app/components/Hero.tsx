import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <VStack>
      <Flex
        w={"80%"}
        h={"90vh"}
        backgroundImage={"hero3.jpeg"}
        background="black.100"
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        // justifyContent={"center"}
      >
        <VStack
          w={"full"}
          p="1rem"
          justify={"end"}
          px={useBreakpointValue({ base: 4, md: 8, lg: 10 })}
          bgGradient={"linear(to-r, grey.600, transparent)"}
          alignItems="right"
        >
          <Stack maxW={"auto"} align={"end"} spacing={6}>
            <Text
              color={"black"}
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: "xl",
                md: "3xl",
                lg: "4xl",
              })}
              borderWidth="10"
              textAlign={"center"}
            >
              Certified Web 3.0 and Metaverse Developer
            </Text>
            <Text
              width={"auto"}
              color={"red.500"}
              fontWeight={500}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "sm", md: "lg" })}
              textAlign="center"
            >
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
            </Text>

            <Stack direction={"row"}>
              <Button
                as={"a"}
                bg={"red.500"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "teal.500" }}
                href={"https://portal.piaic.org/signup"}
                fontSize={"xs"}
              >
                Get Enrolled
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </VStack>
  );
}
