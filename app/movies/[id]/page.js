import { use } from "react";
import styles from "./css/detailMovie.module.css";

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
    <div className={styles.container}>
      <section>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <div className={styles.movie_info}>
          <h1 className={styles.movie_title}>{original_title}</h1>
          <div>
            <span className={styles.movie_vote_average}>
              {`⭐${vote_average}`}
            </span>
            {` / 10`}
          </div>

          <p className={styles.movie_runtime}>상영시간: {runtime}분</p>
          <p className={styles.movie_release_date}>발표일: {release_date}</p>
        </div>
      </section>
    </div>
  );
}

export async function getData(id) {
  // fetch에서, getServerSideProps와 유사하게 데이터를 받아오려면, fetch(url, {cache:'no-store}) 옵션을 부여해야 함
  const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
    cache: "no-store",
  }).then((data) => data.json());

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