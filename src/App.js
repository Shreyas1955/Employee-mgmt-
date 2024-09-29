
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Login"
import FbConfig from "./FbConfig"
import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import Add from "./Add"
import Update from "./Update"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Add' element={<Add/>} />
        <Route path='/Update' element={<Update/>} />
        <Route path='Navbar' element={<Navbar/>} />
        <Route path='*' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
