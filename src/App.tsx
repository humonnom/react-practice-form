import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const handleClick = () => {};
  return (
    <div className='App'>
      <button type='button' onClick={handleClick}>
        <Link to='/join'>Join</Link>
      </button>
    </div>
  );
}

export default App;
