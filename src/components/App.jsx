import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { GlobalStyle } from "./GlobalStyles";

const Home = lazy(() => import("../pages/Home"))
const Movies = lazy(() => import("../pages/Movies"))
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<SharedLayout />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
