import * as React from "react"
import {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  VStack,
} from "@chakra-ui/react"
import "@fontsource/spartan/700.css"
import customTheme from "./theme"
import DisplayResult from "./components/main-components/display-result";
import KeypadButtons from "./components/main-components/keypad-button";
import TopBar from "./components/main-components/top-bar";



// First Theme
const darkSaturatedBlue = {
  // main background
  mainBackgroundColor:"hsl(222, 26%, 31%)",
  // toggle background, keypad background
  toggleKeybadBackgroundColor:"hsl(223, 31%, 20%)",
  // screen background
  screenBackgroundColor:"hsl(224, 36%, 15%)",
  // Button digit colors
  buttonDigitColor:"hsl(221, 14%, 31%)",
}

// Custom styles
const buttonStyle = {
  width:"100%"
}


export default function App(){

  return (
    <ChakraProvider theme={customTheme}>
    <Box p="2" bg={darkSaturatedBlue.mainBackgroundColor} >
        <Center>
          <VStack>
            <TopBar/>
            <DisplayResult/>
            <KeypadButtons/>
          </VStack>
        </Center>
    </Box>
  </ChakraProvider>
  );
}




