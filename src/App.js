import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomeCompo/Home/Home';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
