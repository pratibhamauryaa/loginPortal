import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/dashboard';
import { useLocation } from 'react-router-dom';


function App() {
  return (
    <div className='App'  >
    <Router >
      <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
