import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const getGreeting = async () => {
  const res = await fetch("/api/test");
  return await res.json();
};

function App() {
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState("-");
  useEffect(() => {
    getGreeting().then((res) => setGreet(res.greeting));
  }, []);
  return (
    <div>
      <h1>Edz</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}. Server says {greet}.
        </button>
      </div>
    </div>
  );
}

export default App;
