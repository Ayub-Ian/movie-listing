import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "./moviesSlice";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import MovieItem from "./MovieItem";



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
    <div className=" tw-w-full">
      <div className="tw-container tw-mx-auto tw-py-2 tw-px-4 lg:tw-px-0">
        <div className=" tw-mt-3 tw-flex tw-justify-between">
          <h3 className=" tw-font-['Aclonica'] tw-text-xl">All Movies</h3>
          <div className="tw-flex tw-items-center tw-space-x-1">
            <p>Filter</p>
          <AdjustmentsVerticalIcon className="tw-h-5 tw-w-5" />
          </div>
        </div>

        <div className="tw-mt-4">
          <div className="md:tw-grid md:tw-grid-cols-4 md:tw-gap-6 ">
            {movies.map(movie => <MovieItem key={movie._id} movie={movie} />)}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MoviesList