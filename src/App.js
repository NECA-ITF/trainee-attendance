import './App.css';
// import CustomButton from './components/customButton/CustomButton';
// import CustomInput from './components/customInput/CustomInput';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
  return (
    <div className="App">
        {/* <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
        <CustomInput placeholder= "Email"/> */}
        <RegisterPage />
    </div>
  );
}

export default App;

