import './App.css';
import Name from "./Companents/Name.jsx"
import Email from './Companents/Email.jsx';
import Adress from './Companents/Adress.jsx';
import PersonalInfo from './Companents/PersonalInfo.jsx';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Name name="Nijat Aliyev" />
        <div className='others'>
          <PersonalInfo birth="29 03 2004" job="student" />
          <Adress adress="Baku" />
          <Email email="nicat3699@gmail.com" />
        </div>
      </div>
    </div>
  );
}

export default App;
