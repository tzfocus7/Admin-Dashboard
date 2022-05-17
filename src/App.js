import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'



function App() {
    

  return (
   <div>
     <Login/>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
     </Routes>
     
     </BrowserRouter>
   </div>
);
}

export default App;