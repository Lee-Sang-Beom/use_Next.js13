"use client"

import axios from "axios";
import { useEffect } from "react";

const Home = () => {

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(()=>{
    try{
      const data = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      console.log(data);
    } catch(error){
      console.log(error);
    }
  },[])
  return (
    <>
    </>
  )
};

export default Home;
