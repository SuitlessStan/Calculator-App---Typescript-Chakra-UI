import * as React from 'react';
import {Box,Input} from '@chakra-ui/react';


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
        onChange={(e)=>console.log(e)}
         />
      </Box>
    );
  }

export default DisplayResult;


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