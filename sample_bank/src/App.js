import "./App.css";
import Home from "./Home";
import Register from "./Components/Register";
import Service from "./Components/Service";
import AllAccountNumbers from "./Components/AllAccountNumbers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banking from "./Pages/Banking";
import Exchanges from "./Pages/Exchanges";
import Fintech from "./Pages/Fintech";
import Insurance from "./Pages/Insurance";
import Investments from "./Pages/Investments";
import Loans from "./Pages/Loans";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/allaccno" element={<AllAccountNumbers />} />
        <Route exact path="/banking" element={<Banking />} />
        <Route exact path="/exchanges" element={<Exchanges />} />
        <Route exact path="/fintech" element={<Fintech />} />
        <Route exact path="/insurance" element={<Insurance />} />
        <Route exact path="/investments" element={<Investments />} />
        <Route exact path="/loans" element={<Loans />} />
      </Routes>
    </Router>
  );
}

export default App;
