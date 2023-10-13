import React from 'react'
import "../public/welcome.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
// import { Routes, Route, Link } from "react-router-dom";


const Welcome = () => {
  const [Movies, setMovies] = useState([]);
  const [MovieId, setMovieId] = useState("");
  const [query , setquery] = useState("");
const navigate = useNavigate();
 


  const getPopularMovies = async () => {
      try {
          const { data } = await axios.get(
              "https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1"
          );
          setMovieId(data.results.length);
          setMovies(data.results[Math.floor(Math.random() * 10) + 1].backdrop_path);
      } catch (err) {
          console.log(err);
      }
  };


  useEffect(() => {
    getPopularMovies();

}, []);
  
console.log(Movies)
console.log(MovieId)
const imageid = `https://image.tmdb.org/t/p/w500/${Movies}`;

// for(var i = 0 ; i<Movies.length ; i++)
// {
//   console.log(Movies[i].id)
// }
// setMovieId(Movies[getRndInteger(0 , Movies.length-1)]);
// console.log(MovieId)
//   useEffect(() => {
//       getPopularMovies();
//   }, []);
const SearchAPI = (e)=>
{
  e.preventDefault();
  console.log(query);
  navigate(`/Search/${query}`);
}

  return (
    <>
    
            
      <div id="box" >
        <img src= {imageid}  alt="" />
        <div id="blue">
        </div>
        <h1>Welcome.</h1>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <form onSubmit={SearchAPI} className="d-flex" role="search" id='search'>
        <input className="form-control me-2" onChange={(e) => setquery(e.target.value)} value = {query} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-info" type="submit">Search</button>
      </form>
      </div>


      
    </>
  )
}

export default Welcome