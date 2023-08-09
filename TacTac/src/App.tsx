import './App.css';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram Clone</h1>
      </header>
      <main>
        <Home />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
