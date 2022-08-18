import logo from './logo.svg';
import './App.css';
import CustomButton from './components/customButton/CustomButton';

function App() {
  return (
    <div className="App">
        <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
    </div>
  );
}

export default App;
