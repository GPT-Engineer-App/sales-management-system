import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CustomerDetails from "./pages/CustomerDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
