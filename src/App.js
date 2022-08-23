import './App.css';
import RegisterPage from './pages/registerPage/RegisterPage';
// import CustomButton from './components/customButton/CustomButton';
// import CustomInput from './components/customInput/CustomInput';

function App() {
  return (
    <div className="App">
        {/* <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
        <CustomInput placeholder= "Email"/> */}
        <RegisterPage/>
    </div>
  );
}

export default App;

