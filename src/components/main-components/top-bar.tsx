import * as React from 'react';
import {Container,Flex,Box,Spacer,FormControl,FormLabel,Switch,Text} from '@chakra-ui/react';




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
  
export default TopBar;