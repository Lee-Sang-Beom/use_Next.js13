// app/page.js

"use client";

import axios from "axios";
import "semantic-ui-css/semantic.min.css";

import { useState, useEffect, Suspense } from "react";
import Loading from "../component/Loading";
import styles from "./css/Main.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

// @next/font
const inter = Inter({ subsets: ["latin"], weight: "600", preload: false });

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getMovieDatas() {
    const { results } = await axios.get("/api/movies").then((res) => res.data);
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
