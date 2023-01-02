import axios from "axios";
import { use } from "react";

export default function DetailMovieData(props) {
  // context.params.id가, app/page.js에서 전달한 movie.id
  const data = use(getData(props.params.id));
  const {
    original_title,
    overview,
    homepage,
    poster_path,
    vote_average,
    runtime,
    release_date,
  } = data.props;

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <p>제목: {original_title}</p>
      <p>상영시간: {runtime}분</p>
      <p>발표일: {release_date}</p>
    </>
  );
}

export async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/movies/${id}`, { cache: "no-store" }).then(data => data.json());

  const {
    original_title,
    overview,
    homepage,
    poster_path,
    vote_average,
    runtime,
    release_date,
  } = res;


  return {
    props: {
      original_title,
      overview,
      homepage,
      poster_path,
      vote_average,
      runtime,
      release_date,
    },
  };
}
