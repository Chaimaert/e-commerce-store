import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
