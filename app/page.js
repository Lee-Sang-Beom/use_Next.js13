"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../component/Loading";
import styles from "./css/Main.module.css";
import { Inter } from "@next/font/google";

// @next/font
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getMovieDatas() {
    const { results } = await axios.get("/api/movies").then((res) => res.data);
    setMovies(results);
    setIsLoading(false);
  }

  console.log(movies);
  useEffect(() => {
    getMovieDatas();
  }, []);

  return (
    <div className={styles.movie__mainpage}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={inter.className}>
          {movies.map((movie) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
