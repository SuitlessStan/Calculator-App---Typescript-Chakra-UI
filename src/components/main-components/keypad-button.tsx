import * as React from 'react';
import {Grid,Container,GridItem} from '@chakra-ui/react';
import CalculatorButton from '../button-component';
import FunctionalButton from '../function-component';


function KeypadButtons() {
    return <Container bg={darkSaturatedBlue.toggleKeybadBackgroundColor} borderRadius="3" p="3">
      <Grid templateColumns="repeat(4,1fr)" templateRows="repeat(5,1fr)" gap="2">
        <CalculatorButton digit={7} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor} onClick={(e) => {const element = e.target as HTMLElement; console.log(element.textContent)}} />
        <CalculatorButton digit={8} color="white" size="md" bg={darkSaturatedBlue.buttonDigitColor} onClick={(e) => {const element = e.target as HTMLElement; console.log(element.textContent)}}/>
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
  

export default KeypadButtons;



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