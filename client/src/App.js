
import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");


    script.src = "https://res.xenioo.com/plugin/xenioo.js";
    script["data-node"] = "cm91dGluZy54ZW5pb28uY29t";
    script2.src = "./xenioo.js";
    // script.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
