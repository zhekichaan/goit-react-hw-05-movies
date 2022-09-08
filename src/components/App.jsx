import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Movies } from "../pages/Movies";
import { Home } from "pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>    
    </Routes>
  );
};
