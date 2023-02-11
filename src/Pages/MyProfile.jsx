import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
} from '@chakra-ui/react'
import SaveRecipes from './SaveRecipes'
const MyProfile = () => {
  let profile=JSON.parse(localStorage.getItem("profile"))
  return (
    <Box>
    <TableContainer p={5}>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{profile.name}</Td>
        <Td>{profile.email}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Heading>My Save Recipes</Heading>
<SaveRecipes/>
</Box>
  )
}

export default MyProfile