
import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            User number: {count}
           
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
