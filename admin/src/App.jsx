import Dashboard from "./testdashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import User from "./testdashboard/user";
import Product from "./testdashboard/product";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<User />} />
      <Route path="/product" element={<Product />} />
      <Route path="/" element={<User />} />
      <Route path="/user" element={<User />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
