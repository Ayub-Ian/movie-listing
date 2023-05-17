import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./features/movies/MoviesList";
import Header from "./components/Header";
import StarsList from "./features/stars/StarsList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="stars" element={<StarsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
