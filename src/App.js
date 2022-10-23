import Compress from "./components/Compress/Compress";
import Navbar from "./components/Navbar/Navbar";
import Divide from "./components/Divide/Divide";
import Unite from "./components/Unite/Unite";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
   <>
   <Navbar />
   <Routes>
        <Route path="/" element={<Unite/>} />
        <Route path="unite" element={<Unite/>} />
        <Route path="divide" element={<Divide />} />
        <Route path="compress" element={<Compress />} />
   </Routes>
   </>
  );
}

export default App;
