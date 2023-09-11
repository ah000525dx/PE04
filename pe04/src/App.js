import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Cities Application
        </h1>
        <h7>
        Cities List &emsp; Add City
        </h7>
      </header>
      <h1>
        Add city
      </h1>
      <div>
           Name:&emsp;
            <input type="text" id="right"/>
            <br></br>
            Country:&emsp;
            <input type="text" id="right"/>
            <br></br>
            Population:&emsp;
            <input type="text" id="right"/>
            <br></br><br></br>
            <button type="button">Add city</button>
          </div>
    </div>
    
  );
}

export default App;
