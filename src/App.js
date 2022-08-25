import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import Dashboard from './pages/dashboardPage/Dashboard';
import ProfilePage from './pages/profilePage/ProfilePage';
import EditProfile from './components/EditProfile/EditProfile';
import Login from './pages/loginpage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import WaitingPage from './pages/waitingPage/WaitingPage';
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/confirm" element={<WaitingPage />} />
          <Route path="*" element={<h1>404</h1>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
