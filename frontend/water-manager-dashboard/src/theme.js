import { extendTheme } from "@chakra-ui/react";
import "@fontsource/mulish"
import "@fontsource/raleway"
const theme=extendTheme({
    fonts:{
        body:{
            fontFamily:"Mulish,raleway,sans-serif"
        }
    }
})

export default theme;