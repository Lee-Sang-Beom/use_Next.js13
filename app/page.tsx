// app/page.js

"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../component/Loading";
import styles from "./css/Main.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useQuery } from "react-query";

interface MovieData {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: number;
  original_title: String;
  original_language: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
}

// @next/font
const inter = Inter({ subsets: ["latin"], weight: "600", preload: false });

const Home = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  // const [isLoading, setIsLoading] = useState<Boolean>(true); // useQuery 사용 시, isLoading이 필요없음

  const fetchMovieList = () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  };

  const { isLoading, status, data, error } = useQuery(
    "popluar_movies_data",
    fetchMovieList,
    {
      refetchOnWindowFocus: false,
      enabled: true,
      retry: 0,
      onSuccess: (data) => {
        setMovies(data.data.results);
        // setIsLoading(false);
        // 데이터를 받아오면 로딩 정지
      },
      onError: (e: Error) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다.
        // (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(e.message);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.movie_mainpage}>
      <section>
        <h2 className={styles.popular_movies_section_title}>인기 영화</h2>
        <div className={styles.movies_wrap}>
          {movies &&
            movies.map((movie) => (
              // 각 movie img, title을 출력
              <div className={styles.movie} key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <img
                    alt="movie poster"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                  <p className={inter.className}>{movie.original_title}</p>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
