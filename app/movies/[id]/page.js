"use client";
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

  function moveBackPage() {
    window.history.back();
  }

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.movie_poster_wrap}>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          <button className={styles.move_backbtn} onClick={moveBackPage}>
            뒤로가기
          </button>
        </div>

        <div className={styles.movie_info}>
          <h1 className={styles.movie_title}>{original_title}</h1>

          <div>
            ⭐
            <span className={styles.movie_vote_average}>
              {`${vote_average}`}
            </span>
            {` / 10`}
            <hr />
          </div>

          <dl>
            <dt>상영시간</dt>
            <dd>{runtime}분</dd>
            <dt>발표일</dt>
            <dd>{release_date}</dd>
            <dt>스토리</dt>
            <dd>{overview}</dd>
          </dl>
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
