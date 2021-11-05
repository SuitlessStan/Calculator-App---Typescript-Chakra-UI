import * as React from "react"
import {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Center,
  Spacer,
  Container,
  VStack,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Input,
  Grid,
  GridItem
} from "@chakra-ui/react"
import "@fontsource/spartan/700.css"
import customTheme from "./theme"
import CalculatorButton from "./components/button-component";
import FunctionalButton from "./components/function-component";

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


function KeypadButtons() {
  return <Container bg={darkSaturatedBlue.toggleKeybadBackgroundColor} borderRadius="3" p="3">
    <Grid templateColumns="repeat(4,1fr)" templateRows="repeat(5,1fr)" gap="2">
      <CalculatorButton digit={7} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor} />
      <CalculatorButton digit={8} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <CalculatorButton digit={9} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <FunctionalButton digit={"DEL"} color="white" size="md" boxShadow="md"  />
      <CalculatorButton digit={4} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <CalculatorButton digit={5} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <CalculatorButton digit={6} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <FunctionalButton digit={"+"} color="white" size="md" boxShadow="md" />
      <CalculatorButton digit={1} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <CalculatorButton digit={2} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <CalculatorButton digit={3} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <FunctionalButton digit={"-"} color="white" size="md" boxShadow="md" />
      <FunctionalButton digit={"."} color="white" size="md" boxShadow="md" />
      <CalculatorButton digit={0} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor}/>
      <FunctionalButton digit={"/"} color="white" size="md" boxShadow="md" />
      <FunctionalButton digit={"x"} color="white" size="md"  boxShadow="md"/>
      <GridItem colSpan={2}>
        <FunctionalButton digit={"RESET"} color="teal" size="md" style={buttonStyle} boxShadow="md" />
      </GridItem>
      <GridItem colSpan={2}>
        <FunctionalButton digit={"="} color="red" size="md" style={buttonStyle} boxShadow="md" />
      </GridItem>
    </Grid>
  </Container>;
}

function DisplayResult() {
  return (
    <Box size="lg" mb="2" sx={{ width: "100%" }}>
    <Input
      placeholder="0"
      textAlign="right"
      p="10"
      bg={darkSaturatedBlue.screenBackgroundColor}
      border="none"
      fontSize="23"
      value={0}
       />
    </Box>
  );
}

function TopBar() {
  return (
    <Container p="0">
      <Flex align="center" justify="space-between">
      <Box>
        <Text fontSize="22" fontWeight="bold">calc</Text>
      </Box>
      <Spacer />
      <Box>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="theme-switch" mb="0" fontSize="9">
            THEME
          </FormLabel>
          <Switch id="theme-switch" size="sm" isChecked={true} />
        </FormControl>
      </Box>
      </Flex>
    </Container>
  );
}

