import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Personal_form from './Personal_form';
import Lec_forms from './Lec_forms';

function App() {
  return (
    <div className="App">
      <Form/>
      <hr/>
      <br/>
      <Personal_form/>
      <hr/>
      <Lec_forms/>
    </div>
  );
}

export default App;
