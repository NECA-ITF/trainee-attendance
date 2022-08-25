import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Dashboard from './pages/dashboardPage/Dashboard';
import ProfilePage from './pages/profilePage/ProfilePage';
import Login from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import WaitingPage from './pages/waitingPage/WaitingPage';
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/confirm" element={<WaitingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
