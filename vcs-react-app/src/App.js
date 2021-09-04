import './App.css';
import Home from './componants/Home';

function App() {
  return (
    // Main App
    <div className="App">
      {/* Heading/title */}
      <div className="heading">
        <h1>VCS Search engine</h1>
      </div>
      {/* Home componant called */}
      <Home />
      
    </div>
  );
}

export default App;
