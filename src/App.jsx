
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  return (
      <div className="App">          
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorite' element={<Favs/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
