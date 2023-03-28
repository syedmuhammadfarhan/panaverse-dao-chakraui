"use client";
import { ReactNode } from "react";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  ChakraProvider,
  VStack,
  Center,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { CommonQuarters, npaQuarters } from "../components/Data/page-data";

// these are all wrappers

const Quarter = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const QuarterContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      h={"10rem"}
      justifyContent={"center"}
      bgGradient={"linear(to-t, red.500, transparent)"}
      boxShadow={"dark-lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const QuarterHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const QuarterText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={"center"} color={"white"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

export default function Page() {
  return (
    <ChakraProvider>
      <VStack>
        <VStack
          maxW={"80%"}
          p={"10rem"}
          bgGradient={"linear(to-t, red.500, transparent)"}
          gap={"1rem"}
          w={"100%"}
        >
          <Heading textAlign={"center"}>
            Network Programmability and Automation Specialization
          </Heading>
          <Text textAlign={"center"} color="white">
            More than ever, network engineers are finding it challenging to
            complete their duties entirely manually. Network automation is now
            crucial due to new protocols, technologies, delivery models, and the
            requirement for enterprises to become more adaptable and agile. This
            course teaches network engineers how to automate systems with code
            using a variety of technologies and tools, including Linux, Python,
            APIs, and Git.
          </Text>

          <Center
            bg="gray.100"
            py="8px"
            px={"1rem"}
            border="1px"
            borderColor={"gray.100"}
            boxShadow={"dark-lg"}
            borderRadius="2xl"
            as={"a"}
            color="black"
            target="_blank"
            href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
            fontSize={"sm"}
            fontWeight={"bold"}
          >
            For Detailed Syllabus Click Here
          </Center>
        </VStack>
      </VStack>
      <VStack>
        <Box w={"100%"} maxW={"80%"} bg="gray.100" pb={"6rem"}>
          <Box mb={"2rem"}>
            <Heading textAlign={"center"} mt={"4rem"}>
              Program Structure
            </Heading>
            <Center textAlign={"center"} px={"10rem"} mt={"1rem"}>
              We will start the program by learning the fundamentals of
              Object-Oriented programming using JavaScript and TypeScript.
            </Center>
            <Center textAlign={"center"} px={"10rem"}>
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each.
            </Center>
          </Box>
          {CommonQuarters.map(
            (items: { heading: string; description: string }) => {
              return (
                <RevealWrapper reset={true} key={items.heading}>
                  <VStack>
                    <Container as={Stack} py={4}>
                      <Quarter>
                        <QuarterContent>
                          <QuarterHeading>{items.heading}</QuarterHeading>

                          <QuarterText>{items.description}</QuarterText>
                          <QuarterText>Duration: 3 Months</QuarterText>
                        </QuarterContent>
                      </Quarter>
                    </Container>
                  </VStack>
                </RevealWrapper>
              );
            }
          )}

          {npaQuarters.map((items) => {
            return (
              <RevealWrapper reset={true} key={items.heading}>
                <VStack>
                  <Container py={4} as={Stack} spacing={6}>
                    <Quarter>
                      <QuarterContent>
                        <QuarterHeading>{items.heading}</QuarterHeading>

                        <QuarterText>{items.description}</QuarterText>
                        <QuarterText>Duration: 3 Months</QuarterText>
                      </QuarterContent>
                    </Quarter>
                  </Container>
                </VStack>
              </RevealWrapper>
            );
          })}
        </Box>
      </VStack>
    </ChakraProvider>
  );
}
