import { extendTheme,ThemeConfig } from "@chakra-ui/react";



const config : ThemeConfig = {
    initialColorMode:"light",
    useSystemColorMode:true,
}
const customTheme = extendTheme({
    fonts:{
        heading:"Spartan",
    },
    config
})


export default customTheme;