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
  Input
} from "@chakra-ui/react"
import "@fontsource/spartan/700.css"
import customTheme from "./theme"

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
               />
            </Container>
            <Container bg={darkSaturatedBlue.toggleKeybadBackgroundColor} borderRadius="3">

            </Container>
          </VStack>
        </Center>
      </Box>
    </Box>
  </ChakraProvider>
  );
}

