import { ReactNode } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Detail() {
  return (
    <VStack>
      <Box py={12} w={"80%"} px="50">
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Getting Ready for the Next Generation of the Internet
          </Heading>
          <Text
            fontSize="md"
            color={"gray.600"}
            px={{ sm: "1rem", lg: "7rem" }}
          >
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more.
          </Text>
        </VStack>
        <VStack spacing={2} textAlign="center" pt={"2rem"}>
          <Heading as="h1" fontSize="4xl">
            The Program in a Nutshell: Earn While You Learn
          </Heading>
          <Text
            fontSize="md"
            color={"gray.600"}
            px={{ sm: "1rem", lg: "7rem" }}
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program&apos;s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </VStack>
        <VStack spacing={2} textAlign="center" pt={"2rem"}>
          <Heading as="h1" fontSize="4xl">
            Program of Studies
          </Heading>
          <Text
            fontSize="md"
            color={"gray.600"}
            px={{ sm: "1rem", lg: "7rem" }}
          >
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}
