import './App.css';
import CustomButton from './components/customButton/CustomButton';
import CustomInput from './components/customInput/CustomInput';

function App() {
  return (
    <div className="App">
        <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
        <CustomInput placeholder= "Email"/>
    </div>
  );
}

export default App;
