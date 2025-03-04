import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
  // hook from chakra
  const {toggleColorMode, colorMode} = useColorMode()
  // console.log(colorMode);
  
  return (
    <HStack>
      <Switch colorScheme="blue" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch