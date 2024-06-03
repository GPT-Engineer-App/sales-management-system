import { useState } from "react";
import { Container, VStack, HStack, Text, Button, IconButton, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, Input, Textarea, Select } from "@chakra-ui/react";
import { FaUser, FaClipboardList, FaFileInvoiceDollar, FaFileContract, FaMoneyCheckAlt, FaChartLine } from "react-icons/fa";

const Index = () => {
  const [customers, setCustomers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [performance, setPerformance] = useState([]);

  const handleAddCustomer = (customer) => setCustomers([...customers, customer]);
  const handleAddLead = (lead) => setLeads([...leads, lead]);
  const handleAddQuote = (quote) => setQuotes([...quotes, quote]);
  const handleAddContract = (contract) => setContracts([...contracts, contract]);
  const handleAddPayment = (payment) => setPayments([...payments, payment]);
  const handleAddPerformance = (performance) => setPerformance([...performance, performance]);

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <IconButton aria-label="Customers" icon={<FaUser />} size="lg" />
          <IconButton aria-label="Leads" icon={<FaClipboardList />} size="lg" />
          <IconButton aria-label="Quotes" icon={<FaFileInvoiceDollar />} size="lg" />
          <IconButton aria-label="Contracts" icon={<FaFileContract />} size="lg" />
          <IconButton aria-label="Payments" icon={<FaMoneyCheckAlt />} size="lg" />
          <IconButton aria-label="Performance" icon={<FaChartLine />} size="lg" />
        </HStack>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>客户管理</Tab>
            <Tab>线索跟进</Tab>
            <Tab>报价签单</Tab>
            <Tab>合同管理</Tab>
            <Tab>收付款</Tab>
            <Tab>绩效管理</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CustomerManagement customers={customers} onAddCustomer={handleAddCustomer} />
            </TabPanel>
            <TabPanel>
              <LeadManagement leads={leads} onAddLead={handleAddLead} />
            </TabPanel>
            <TabPanel>
              <QuoteManagement quotes={quotes} onAddQuote={handleAddQuote} />
            </TabPanel>
            <TabPanel>
              <ContractManagement contracts={contracts} onAddContract={handleAddContract} />
            </TabPanel>
            <TabPanel>
              <PaymentManagement payments={payments} onAddPayment={handleAddPayment} />
            </TabPanel>
            <TabPanel>
              <PerformanceManagement performance={performance} onAddPerformance={handleAddPerformance} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

const CustomerManagement = ({ customers, onAddCustomer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    onAddCustomer({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>姓名</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>邮箱</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>电话</FormLabel>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>添加客户</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>姓名</Th>
            <Th>邮箱</Th>
            <Th>电话</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer, index) => (
            <Tr key={index}>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

const LeadManagement = ({ leads, onAddLead }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onAddLead({ description });
    setDescription("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>线索描述</FormLabel>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>添加线索</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>描述</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leads.map((lead, index) => (
            <Tr key={index}>
              <Td>{lead.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

const QuoteManagement = ({ quotes, onAddQuote }) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    onAddQuote({ item, price });
    setItem("");
    setPrice("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>项目</FormLabel>
        <Input value={item} onChange={(e) => setItem(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>价格</FormLabel>
        <Input value={price} onChange={(e) => setPrice(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>添加报价</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>项目</Th>
            <Th>价格</Th>
          </Tr>
        </Thead>
        <Tbody>
          {quotes.map((quote, index) => (
            <Tr key={index}>
              <Td>{quote.item}</Td>
              <Td>{quote.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

const ContractManagement = ({ contracts, onAddContract }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    onAddContract({ title, details });
    setTitle("");
    setDetails("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>合同标题</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>合同详情</FormLabel>
        <Textarea value={details} onChange={(e) => setDetails(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>添加合同</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>标题</Th>
            <Th>详情</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contracts.map((contract, index) => (
            <Tr key={index}>
              <Td>{contract.title}</Td>
              <Td>{contract.details}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

const PaymentManagement = ({ payments, onAddPayment }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    onAddPayment({ amount, date });
    setAmount("");
    setDate("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>金额</FormLabel>
        <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>日期</FormLabel>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>添加付款</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>金额</Th>
            <Th>日期</Th>
          </Tr>
        </Thead>
        <Tbody>
          {payments.map((payment, index) => (
            <Tr key={index}>
              <Td>{payment.amount}</Td>
              <Td>{payment.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

const PerformanceManagement = ({ performance, onAddPerformance }) => {
  const [employee, setEmployee] = useState("");
  const [metric, setMetric] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    onAddPerformance({ employee, metric, value });
    setEmployee("");
    setMetric("");
    setValue("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>员工</FormLabel>
        <Input value={employee} onChange={(e) => setEmployee(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>绩效指标</FormLabel>
        <Input value={metric} onChange={(e) => setMetric(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>值</FormLabel>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>添加绩效</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>员工</Th>
            <Th>绩效指标</Th>
            <Th>值</Th>
          </Tr>
        </Thead>
        <Tbody>
          {performance.map((perf, index) => (
            <Tr key={index}>
              <Td>{perf.employee}</Td>
              <Td>{perf.metric}</Td>
              <Td>{perf.value}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default Index;
