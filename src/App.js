import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Checkout from './Checkout';
import Subtotal from './Subtotal';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
     
    <div className="App">
      <Header /> 
     <Router>
       <Routes>
         
        <Route path="/" element={<Home />}  />
        <Route path="/checkout" element={<Checkout/>} />
        
       </Routes>
      </Router>
       
    </div>
     
  );
}

export default App;
