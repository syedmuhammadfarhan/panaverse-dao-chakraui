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
                base: "3xl",
                md: "4xl",
                // lg: "4xl",
              })}
              borderWidth="10"
            >
              Certified Web 3.0 and Metaverse Developer
            </Text>
            <Text
              width={"auto"}
              color={"red.400"}
              fontWeight={500}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
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
