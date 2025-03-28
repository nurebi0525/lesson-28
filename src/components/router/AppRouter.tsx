import { Navigate, Route, Routes } from "react-router-dom";
import { MovieList } from "../page/MovieList";
import { AppLayout } from "../layout/AppLayout";
import { MovieDec } from "../page/MoviesDec";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to={"/movie"} />} />
        <Route path="movie" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDec />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
