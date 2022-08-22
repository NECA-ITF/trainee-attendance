import './App.css';
import WaitingPage from './pages/waitingPage/WaitingPage'
// import CustomButton from './components/customButton/CustomButton';
// import CustomInput from './components/customInput/CustomInput';

function App() {
  return (
    <div className="App">
        {/* <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
        <CustomInput placeholder= "Email"/> */}
        <WaitingPage/>
    </div>
  );
}

export default App;
