import './App.css';
import Home from './Home';
import Register from './Components/Register';
import Service from './Components/Service';
import AllAccountNumbers from './Components/AllAccountNumbers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/allaccno" element={<AllAccountNumbers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
