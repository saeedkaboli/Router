import { Link, Navigate, Route, Routes } from "react-router-dom";
import First from "./Pages/First/First";
import Show from "./Pages/First/Show";

// The Style
import "./App.css";
import Second from './Pages/Second/Second';
import Third from './Pages/Third/Thirth';
import Fourth from "./Pages/Fourth/Fourth";


const App = () => {
  return (
    <div className="App">
      <div className="Nav">
        <Link to="/first">First</Link>
        <Link to="/second">Second</Link>
        <Link to="/third">Third</Link>
        <Link to="/fourth">Fourth</Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/first" />} />
        <Route path="/first" element={<First />}>
          <Route index element={<h1>No think Data</h1>} />
          <Route path=":Id" element={<Show/>} />
        </Route>
        <Route path="/second" element={<Second/>} />
        <Route path="/third" element={<Third/>} />
        <Route path="/fourth" element={<Fourth/>} />
      </Routes>
      <div className="Footer">this is Footer</div>
    </div>
  );
};

export default App;
