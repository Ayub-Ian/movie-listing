import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "./moviesSlice";


function MoviesList() {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies)
  const isLoading = useSelector(
    (state) => state.movies.status === "loading"
  );

  console.log(movies)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>MoviesList</div>
  )
}

export default MoviesList