import * as React from 'react';
import {Button} from '@chakra-ui/react';

const FunctionalButton : React.FC<{digit:string,color:string,boxShadow:string,size:string,style?:object}> = ({digit,color,boxShadow,size,style}) => {
    return (
        <Button colorScheme={color} size={size} sx={style} m="1" boxShadow={boxShadow}>
            {digit}
        </Button>
    )
}

export default FunctionalButton;