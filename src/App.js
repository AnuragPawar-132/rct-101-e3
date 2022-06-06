import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>} />
        <Route path="/" element={<RequiredAuth><Products/></RequiredAuth> } />
        <Route path="/" element={<RequiredAuth><Home/> </RequiredAuth>} />
      </Routes>
    </div>
  );
}

export default App;
