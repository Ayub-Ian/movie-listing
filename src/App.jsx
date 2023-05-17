import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./features/MoviesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
