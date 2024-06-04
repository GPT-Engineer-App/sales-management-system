import { useState } from "react";
import { Box, Button, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const CustomerManagement = ({ customers, onAddCustomer }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    company: "",
    companyAddress: "",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    onAddCustomer(newCustomer);
    setNewCustomer({
      name: "",
      phone: "",
      address: "",
      company: "",
      companyAddress: "",
    });
  };

  const filteredCustomers = customers.filter((customer) => customer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box p={4}>
      <Input placeholder="Search customers" value={searchTerm} onChange={handleSearch} mb={4} />
      <Box mb={4}>
        <Input placeholder="Name" name="name" value={newCustomer.name} onChange={handleInputChange} mb={2} />
        <Input placeholder="Phone" name="phone" value={newCustomer.phone} onChange={handleInputChange} mb={2} />
        <Input placeholder="Address" name="address" value={newCustomer.address} onChange={handleInputChange} mb={2} />
        <Input placeholder="Company" name="company" value={newCustomer.company} onChange={handleInputChange} mb={2} />
        <Input placeholder="Company Address" name="companyAddress" value={newCustomer.companyAddress} onChange={handleInputChange} mb={2} />
        <Button onClick={handleAddCustomer}>Add Customer</Button>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Address</Th>
            <Th>Company</Th>
            <Th>Company Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredCustomers.map((customer, index) => (
            <Tr key={index}>
              <Td>{customer.name}</Td>
              <Td>{customer.phone}</Td>
              <Td>{customer.address}</Td>
              <Td>{customer.company}</Td>
              <Td>{customer.companyAddress}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerManagement;
