"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../component/Loading";

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

  console.log(movies)
  return (
      <>
        {isLoading ? 
        <Loading/> : <>데이터 로드 완료</>}
      </>
  );
};

export default Home;
