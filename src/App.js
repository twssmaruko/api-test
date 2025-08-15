import 'antd/dist/reset.css';
import './App.css';
import CustomInput from './components/CustomInput';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test APP</h1>
        <CustomInput />
      </header>
    </div>
  );
};

export default App;
