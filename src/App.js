import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Dashboard from './pages/DashboardPage/DashboardPage';
import ProfilePage from './pages/profilePage/ProfilePage';
// import Login from './pages/registerPage/RegisterPage';
import RegisterPage from './pages/registerPage/RegisterPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
{/* <RegisterPage /> */}
    </div>
  );
}

export default App;

