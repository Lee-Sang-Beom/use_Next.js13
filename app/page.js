"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../component/Loading";
import styles from "./css/Main.module.css";

const Home = () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function getMovieDatas() {
    await axios
      .get("/api/movies")
      .then((res) => setMovies(res.data));
      setIsLoading(false);
  }

  useEffect(() => {
    getMovieDatas();
  }, []);

  return (
      <div className={styles.movie__mainpage}>
        {isLoading ? 
        <Loading/> : 
        <>데이터 로드 완료</>}
      </div>
  );
};

export default Home;
