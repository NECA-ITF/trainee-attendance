import './App.css';
import HomePage from './pages/homePage/Homepage'
import ProfilePage from './pages/profilePage/ProfilePage'
import LoginPage from './pages/loginPage/LoginPage'
import RegisterPage from './pages/registerPage/RegisterPage';
import WaitingPage from './pages/waitingPage/WaitingPage'
function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <ProfilePage/>
      {/* <Dashboard/> */}
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* <WaitingPage/> */}
    </div>
  );
}

export default App;
