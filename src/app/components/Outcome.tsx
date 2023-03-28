import React from "react";
import { Box, Stack, Heading, Text, VStack } from "@chakra-ui/react";

export default function Outcome() {
  return (
    <VStack>
      <Box w={"80%"} mb="6rem">
        <VStack spacing={2} textAlign="center" pt={"70"}>
          <Heading as="h1" fontSize="4xl">
            The Outcome for Participants of the Program
          </Heading>
          <Text
            fontSize="md"
            color={"gray.600"}
            px={{ sm: "5rem", lg: "5rem", xl: "10rem" }}
          >
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the Panaverse DAO and, if they like, will also be able
            to start off by offering services at a rate of $50 per hour ($96,000
            per year). This would give Pakistani professionals and students a
            fantastic opportunity to better their financial situation while also
            giving the economy a much-needed boost by expanding software
            exports.
          </Text>
        </VStack>
        <VStack mt="10">
          <Stack>
            <Text
              as={"a"}
              color="blue"
              fontFamily={"sans-serif"}
              target="_blank"
              href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
            >
              1. Top 5 &lsquo;Metaverse&rsquo; jobs that will rule the future of
              tech industry
            </Text>
            <Text
              as={"a"}
              color="blue"
              fontFamily={"sans-serif"}
              target="_blank"
              href="https://web3.career/web3-salaries/blockchain-developer
            "
            >
              2. Blockchain Developer Salary - Jun 2022
            </Text>
            <Text
              as={"a"}
              color="blue"
              fontFamily={"sans-serif"}
              target="_blank"
              href="https://thedefiant.io/web3-soaring-salaries/"
            >
              3. Web3 Salaries Soar to $750,000 for Rank-and-File Devs
            </Text>
            <Text
              as={"a"}
              color="blue"
              fontFamily={"sans-serif"}
              target="_blank"
              href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
            >
              4. The Metaverse, Blockchain Gaming, and NFTs: Navigating the
              Internet&apos;s Uncharted Waters
            </Text>
            <Text
              as={"a"}
              color="blue"
              fontFamily={"sans-serif"}
              target="_blank"
              href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
            >
              5. How To Become Metaverse Developer: Scope, Skills, and Salary
            </Text>
          </Stack>
        </VStack>
      </Box>
    </VStack>
  );
}
