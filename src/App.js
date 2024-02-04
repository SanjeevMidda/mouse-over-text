import { useState } from "react";
import "./index.css";

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="App">
      <header>
        <h1 onMouseEnter={() => setContent(<h2>ONE</h2>)}>1</h1>
        <h1 onMouseEnter={() => setContent(<h2>TWO</h2>)}>2</h1>
        <h1 onMouseEnter={() => setContent("THREE")}>3</h1>
        <h1 onMouseEnter={() => setContent("FOUR")}>4</h1>
        <h1 onMouseEnter={() => setContent("FIVE")}>5</h1>
      </header>

      <div className="text">{content}</div>
    </div>
  );
}

export default App;
