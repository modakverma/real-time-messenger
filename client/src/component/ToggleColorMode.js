
import { Button } from "@chakra-ui/button"
import React from 'react'
import {SunIcon , MoonIcon} from "@chakra-ui/icons"
import { useColorMode } from "@chakra-ui/color-mode"

const ToggleColorMode = () => {
    const {colorMode,toggleColorMode} = useColorMode()
  return (
    <Button onClick={()=> toggleColorMode()} 
    pos="absolute" 
    top="0" 
    right="0"
    m="1rem"
    >
      {
          colorMode==="dark"?<SunIcon color="orange.300"/>:<MoonIcon color="blue.600"/>
      }
    </Button>
  )
}

export default ToggleColorMode
