import * as React from 'react';
import {Button} from '@chakra-ui/react';


const CalculatorButton: React.FC<{digit:Number,color:string,bg?:string,size:string}> = ({digit,color,bg,size}) => {
    return (
        <Button colorScheme="White" size={size} m="1" bg={bg} variant="solid">
            {digit}
        </Button>
    );
}

export default CalculatorButton;