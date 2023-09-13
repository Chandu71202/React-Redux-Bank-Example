import './App.css';
import Home from './Home';
import Register from './Components/Register';
import Service from './Components/Service';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
