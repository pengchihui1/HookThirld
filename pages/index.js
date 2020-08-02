import React,{useState} from 'react'
import { useDisclosure}  from '@chakra-ui/core'
import { Box } from "@chakra-ui/core"


const SectionContext = React.createContext({ parent: 'TableHead' })

const TableHead = ({ children }) => {
  return (
    <thead>
      <SectionContext.Provider value={{ parent: 'TableHead' }}>
        {children}
      </SectionContext.Provider>
    </thead>
  )
}

const TableBody = ({ children }) => {
  return (
    <tbody>
      <SectionContext.Provider value={{ parent: 'TableBody' }}>
        {children}
      </SectionContext.Provider>
    </tbody>
  )
}

const TableCell = ({ children }) => {
  const { parent } = React.useContext(SectionContext)
  const Component = parent === 'TableHead' ? 'th' : 'td'
  return <Component>接收的值:{parent}</Component>
}

export default TableCell