import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <button type="button">
        <Link to="/join">click to join</Link>
      </button>
    </div>
  );
}

export default App;
