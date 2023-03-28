"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Detail from "./components/Detail";
import Hero from "./components/Hero";
import Outcome from "./components/Outcome";
import Courses4 from "./components/courses4";
import Courses5 from "./components/courses5";

export default function Home() {
  return (
    <ChakraProvider>
      <Hero />
      <Detail />
      <Courses4 />
      <Courses5 />
      <Outcome />
    </ChakraProvider>
  );
}
