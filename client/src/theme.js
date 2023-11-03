import {extendTheme} from "@chakra-ui/react"

const theme = {
    config:{
        initialColorMode:"dark",
        useSystemColorMode: true,
    },
    styles:{
        global:{
            body: {
                margin:0,
                "font-family":"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                "line-height": "1.5",
                "font-weight": "400",
              
                "color-scheme": "light dark",
                "color": "rgba(255, 255, 255, 0.87)",
                "font-synthesis": "none",
                "text-rendering": "optimizeLegibility",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
                "-webkit-text-size-adjust":"100%;"
              }
        }
    }
}

export default extendTheme(theme)