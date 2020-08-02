import React,{useState} from 'react'
import { Input,Box,Button}  from '@chakra-ui/core'
import {ModulesContext} from './context.js'
import InputText from './input'

 const Popover = () => {
  // const [showing, setShowing] = React.useState(false)
  return(
  <>
		 <ModulesContext.Provider value={{parent:"123456"}} >
		        <InputText/>
		  </ModulesContext.Provider>
  </>
  )
}

export default Popover