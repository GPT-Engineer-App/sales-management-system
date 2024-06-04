import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CustomerDetails from "./pages/CustomerDetails.jsx";
import CustomerManagement from "./pages/CustomerManagement.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
