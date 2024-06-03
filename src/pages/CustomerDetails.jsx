import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

function CustomerDetails() {
  return (
    <Box p={5}>
      <Button colorScheme="teal" mb={4}>
        Add Customer
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Contact</Th>
            <Th>Sales</Th>
            <Th>Last Follow-Up</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John Doe</Td>
            <Td>john@example.com</Td>
            <Td>$5000</Td>
            <Td>2024-06-01</Td>
            <Td>
              <Button size="sm" colorScheme="blue" mr={2}>
                Edit
              </Button>
              <Button size="sm" colorScheme="red" mr={2}>
                Delete
              </Button>
              <Button size="sm" colorScheme="green">
                Assign
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default CustomerDetails;
