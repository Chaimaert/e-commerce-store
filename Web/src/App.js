import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters.jsx";
import AdminRouters from "./Routers/AdminRouters"; 

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/Admin/*" element={<AdminRouters />}></Route>
      
      
      </Routes>
    </div>
  );
}

export default App;
