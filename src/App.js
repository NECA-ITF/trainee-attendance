import './App.css';
// import CustomButton from './components/customButton/CustomButton';
// import CustomInput from './components/customInput/CustomInput';
import Dashboard from './pages/dashboardPage/Dashboard'

function App() {
  return (
    <div className="App">
        {/* <CustomButton title= "Register" onClick={()=> console.log("clicked")}/>
        <CustomInput placeholder= "Email"/> */}
        <Dashboard />
    </div>
  );
}

export default App;
