import './App.css';
import ProfilePage from './pages/profilePage/ProfilePage';
// import CustomButton from './components/customButton/CustomButton';
// import CustomInput from './components/customInput/CustomInput';

function App() {
  return (
    <div className="App">
        {/* <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
        <CustomInput placeholder= "Email"/> */}
        <ProfilePage/>
    </div>
  );
}

export default App;

