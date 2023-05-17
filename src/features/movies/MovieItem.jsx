import { Link } from "react-router-dom"


function MovieItem({ movie }) {
  return (
    <div className="tw-pb-5">
        <img className=" tw-mb-2 tw-transition-all tw-ease-in-out tw-duration-300 hover:tw-scale-105" src={movie.poster} alt="movie poster" />
        <Link className=" tw-text-xl tw-font-semibold hover:tw-text-yellow-300">{movie.title}</Link>
    </div>
  )
}

export default MovieItem