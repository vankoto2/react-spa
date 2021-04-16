import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <dev className="content">
        <Home />
      </dev>
    </div>
  );
}

export default App;
