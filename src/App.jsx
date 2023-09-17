import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="movies/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
