import React from 'react'
import { Input}  from '@chakra-ui/core'
import {ModulesContext} from './context.js'

const Popover = () => {
  const { parent } = React.useContext(ModulesContext)
  return(
  <Input placeholder="Basic usage" value={parent} />
  )
}
export default Popover
