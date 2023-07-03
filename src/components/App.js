import './App.css';
import Foot from './Foot';
import TextHead from './TextHead';
import TextInput from './TextInput';

function App() {
  return (
    <>
    <div className="container-flex back">
      <div className="col-md-12">
        
      </div>
      <div className="col-md-12">
        <TextHead title="Capital Finder"></TextHead>
      </div>
      <div className="col-md-12">
        <TextInput></TextInput>
      </div>
      <div className="col-md-1">
        <Foot title="Nikhil Sarode"></Foot>
      </div>
    </div>
    </>
  );
}

export default App;
