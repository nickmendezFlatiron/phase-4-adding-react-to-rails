import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"

function App() {

  useEffect(() => {
    fetch('/movies')
      .then(r => r.json())
      .then(movies => console.log(movies))
  },[])

  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
