import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import { Dashboard } from "./components/views/Dashboard";

const App = () => {
  return (
    <>
    {/* // {console.log("hey")} */}
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/" element={<Login />}/>
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Routes>
    </Router>
     </>
  );
};

export default App;