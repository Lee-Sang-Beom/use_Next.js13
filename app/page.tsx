// app/page.js

"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../component/Loading";
import styles from "./css/Main.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

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

// api key (test)
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  async function getMovieDatas() {
    const { results } = await axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.data);

    console.log(results);
    setMovies(results);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovieDatas();
  }, []);

  return (
    <div className={styles.movie_mainpage}>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <h2 className={styles.popular_movies_section_title}>인기 영화</h2>
          <div className={styles.movies_wrap}>
            {movies.map((movie) => (
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
      )}
    </div>
  );
};

export default Home;
