import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Movies } from "../pages/Movies";
import { Home } from "pages/Home";
import { MovieDetails } from "./MovieDetails/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>    
    </Routes>
  );
};
