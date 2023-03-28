import { Box, Button, VStack, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "next-reveal";
import { Courses1 } from "./Data/page-data";

export default function Courses4() {
  return (
    <RevealWrapper reset={true}>
      <VStack mt={"1rem"}>
        <Stack
          direction={{
            base: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          gap={5}
        >
          {Courses1.map(
            (items: { image: string; heading: string; href: string }) => {
              return (
                <VStack
                  key={items.heading}
                  maxW="280px"
                  w={"280px"}
                  h={"280px"}
                  borderWidth="1px"
                  borderRadius="2xl"
                  overflow="hidden"
                  pb={"3"}
                  boxShadow="rgba(0, 1, 0, 0.1) -5px 5px"
                >
                  <Box w={280} h={230}>
                    <Image
                      src={items.image}
                      width={280}
                      height={230}
                      alt={items.image}
                    />
                  </Box>
                  <VStack>
                    <Box
                      textAlign={"center"}
                      fontWeight={"bold"}
                      fontSize={"md"}
                      m={"8px"}
                    >
                      {items.heading}
                    </Box>

                    <Button
                      as={"a"}
                      rounded={"full"}
                      colorScheme="teal"
                      variant="outline"
                      href={items.href}
                      fontSize={"sm"}
                    >
                      Detail
                    </Button>
                  </VStack>
                </VStack>
              );
            }
          )}
        </Stack>
      </VStack>
    </RevealWrapper>
  );
}
