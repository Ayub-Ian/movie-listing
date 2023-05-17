import { Link } from "react-router-dom";
import {
  Bars3Icon,
  FilmIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Mobile from "./Mobile";

export const MobileNavControls = ({ open, setOpen }) => {
  return (
    <React.Fragment>
      {open ? (
        <XMarkIcon
          onClick={() => setOpen(!open)}
          className="tw-h-6 tw-w-6 tw-text-black"
        />
      ) : (
        <Bars3Icon
          onClick={() => setOpen(!open)}
          className="tw-h-6 tw-w-6 tw-text-black"
        />
      )}
    </React.Fragment>
  );
};

function Header() {
  const [open, setOpen] = useState(false);

  console.log({ open });
  return (
    <div className=" tw-w-full tw-relative">
      <div className=" tw-w-full tw-bg-yellow-400">
        <div className=" tw-container tw-mx-auto tw-py-2 tw-px-4 lg:tw-px-0">
          <div className="tw-flex tw-justify-between tw-items-center">
            <h1 className=" tw-font-bold tw-text-black tw-text-xl">
              MovieListing
            </h1>
            <div className="tw-hidden md:tw-block">
              <div className="tw-flex tw-text-black ">
                <Link to="/" className="tw-flex tw-items-center tw-mr-4">
                  <FilmIcon className="tw-h-6 tw-w-6 tw-mr-2" />
                  <p>Movies</p>
                </Link>

                <Link to="/stars" className="tw-flex tw-items-center">
                  <StarIcon className="tw-h-6 tw-w-6 tw-mr-2" />
                  <p>Stars</p>
                </Link>
              </div>
            </div>
            <div className=" md:tw-hidden">
              {<MobileNavControls open={open} setOpen={setOpen} />}
            </div>
          </div>
        </div>
      </div>
      {open ? <Mobile open={open} setOpen={setOpen} /> : null}
    </div>
  );
}

export default Header;
