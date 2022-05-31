import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/join' element={<p>join</p>} />
      <Route path='/confirm' element={<p>confirm</p>} />
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);
