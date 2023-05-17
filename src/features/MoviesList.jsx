import { useEffect } from "react"
import sanityClient from "../sanityClient"


function MoviesList() {

  useEffect(() => {
    sanityClient.fetch(
      `*[_type ==  "movie"]{
        _id, 
        "poster": poster.assest -> url,
      }`
    )
    .then((res) => console.log(res))
    .catch(console.error)
  }, [])
  return (
    <div>MoviesList</div>
  )
}

export default MoviesList