import sanityClient from "../../sanityClient";

// Action Creators
export function  fetchMovies() {
  return async function (dispatch) {
    try {
      dispatch({ type: "movies/moviesLoading" });
          const data = await sanityClient.fetch(
        `*[_type == 'movie']{
            _id,
            "poster": poster.asset->url,
            title
        } `
      );
      dispatch({ type: "movies/moviesLoaded", payload: data })
    } catch (error) {
      dispatch({ type: "movies/moviesError", payload: error.message });
      console.error(error);
    }
  };
}



// Reducers
const initialState = {
  movies: [], //array of movies,
  status: "idle", //loading status for fetch,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "movies/moviesLoaded":
      return {
        ...state,
        status: "idle",
        movies: action.payload,
      };

    case "movies/moviesLoading":
      return {
        ...state,
        status: "loading",
      };
    case "movies/moviesError":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
