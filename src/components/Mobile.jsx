import { FilmIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Mobile({ open, setOpen }) {
  return (
    <div className=" tw-absolute tw-bg-white tw-w-full tw-text-black tw-z-10 ">
      <div className="tw-group tw-flex tw-flex-col tw-py-2">
        <div className=" tw-py-4 tw-px-4 tw-flex hover:tw-bg-slate-200">
          <Link onClick={() => setOpen(!open)} to="/" className="tw-flex">
            <FilmIcon className="tw-h-6 tw-w-6 tw-mr-2" />
            <p>Movies</p>
          </Link>
        </div>
        <div className=" tw-py-4 tw-px-4  tw-flex hover:tw-bg-slate-200">
          <Link onClick={() => setOpen(!open)} to="/stars" className="tw-flex">
            <StarIcon className="tw-h-6 tw-w-6 tw-mr-2" />
            <p>Stars</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
