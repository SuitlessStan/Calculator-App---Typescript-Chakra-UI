import * as React from 'react';
import {Button} from '@chakra-ui/react';


const CalculatorButton: React.FC<{digit:Number,color:string,bg?:string,size:string,onClick?:React.MouseEventHandler}> = ({digit,color,bg,size,onClick}) => {
    return (
        <Button colorScheme="White" size={size} m="1" bg={bg} variant="solid" onClick={onClick}>
            {digit}
        </Button>
    );
}

export default CalculatorButton;