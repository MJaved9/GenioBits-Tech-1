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
} from '@chakra-ui/react'
const MyProfile = () => {
  let profile=JSON.parse(localStorage.getItem("profile"))
  return (
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
  )
}

export default MyProfile