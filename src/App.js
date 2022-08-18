import './App.css';
import CustomButton from './components/customButton/CustomButton';
import CustomInput from './components/customInput/CustomInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Trainee Attendance
        <CustomButton title="Login" width={300} height={30} borderRadius={5}/>
        <CustomInput placeholder="username" width={100} height={30} borderRadius={5}/>
      </header>
    </div>
  );
}

export default App;
