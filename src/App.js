import Login from "./components/Login";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home"
import CreateAccount from "./components/CreateAccount"
import Moviedetail from "./components/Moviedetail";
function App() {
  
  return (
    <div className="App">
 
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
      <Route path="/Moviedetail/:id" element={<Moviedetail/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
