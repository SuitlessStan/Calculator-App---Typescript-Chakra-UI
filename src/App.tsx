import * as React from "react"
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
import CalculatorButton from "./button-component";
import FunctionalButton from "./function-component";

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


export default function App(){
  const {toggleColorMode} = useColorMode();
  // const {colorMode,toggleColorMode} = useColorMode();
  console.log('The color mode', toggleColorMode);
  const bg = useColorModeValue("red.500",darkSaturatedBlue.mainBackgroundColor);
  const color = useColorModeValue("white","gray.800");

  const startingNumber = 399981;
  
  return (
    <ChakraProvider theme={customTheme}>
    <Box bg={bg} h="100vh" w="100vw" color={color}>
      <Box mx="auto" w={["100%",375]}>
        {/* Main App Container */}
        <Center>
          <VStack>
            {/* Top bar */}
            <Container>
              <Flex align="center" justify="space-between">
                <Box>
                  <Text fontSize="22" fontWeight="bold">calc</Text>
                </Box>
                <Spacer/>
                <Box>
                  <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="theme-switch" mb="0" fontSize="9">
                          THEME
                        </FormLabel>
                        <Switch id="theme-switch" size="sm"  />
                  </FormControl>
                </Box>
              </Flex>
            </Container>
            <Container p="3" size="lg" mb="2">
              <Input
               placeholder="0"
               textAlign="right"
               p="5"
               bg={darkSaturatedBlue.screenBackgroundColor}
               border="none"
               fontSize="23"
               value={startingNumber}
               />
            </Container>
            <Container bg={darkSaturatedBlue.toggleKeybadBackgroundColor} borderRadius="3" p="3">
            <Grid templateColumns="repeat(4,1fr)" templateRows="repeat(5,1fr)" gap="2">
            <CalculatorButton digit={7} color="teal" size="md"/>
            <CalculatorButton digit={8} color="teal" size="md"/>
            <CalculatorButton digit={9} color="teal" size="md"/>
            <FunctionalButton digit={"DEL"} color="teal" size="md"/>
            <CalculatorButton digit={4} color="teal" size="md"/>
            <CalculatorButton digit={5} color="teal" size="md"/>
            <CalculatorButton digit={6} color="teal" size="md"/>
            <FunctionalButton digit={"+"} color="teal" size="md"/>
            <CalculatorButton digit={1} color="teal" size="md"/>
            <CalculatorButton digit={2} color="teal" size="md"/>
            <CalculatorButton digit={3} color="teal" size="md"/>
            <FunctionalButton digit={"-"} color="teal" size="md"/>
            <FunctionalButton digit={"."} color="teal" size="md"/>
            <CalculatorButton digit={0} color="teal" size="md"/>
            <FunctionalButton digit={"/"} color="teal" size="md"/>
            <FunctionalButton digit={"x"} color="teal" size="md"/>
            <GridItem colSpan={2}>
            <FunctionalButton digit={"RESET"} color="teal" size="md" style={buttonStyle}/>
            </GridItem>
            <GridItem colSpan={2}>
            <FunctionalButton digit={"="} color="red" size="md" style={buttonStyle}/>
            </GridItem>
            </Grid>
            </Container>
          </VStack>
        </Center>
      </Box>
    </Box>
  </ChakraProvider>
  );
}

const buttonStyle = {
  width:"100%"
}

