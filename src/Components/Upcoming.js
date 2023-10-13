import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [Movies, setMovies] = useState([]);

  const getUpcoming = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=3d5ee98de2566bea09128ac1a2e86a29&language=en-US&page=${Math.floor(Math.random() * 10) + 1}`
      );
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(Movies);
  useEffect(() => {
    getUpcoming();
  }, []);

  const imageid = `https://image.tmdb.org/t/p/w500`;

  let MovieList = "Loading...";
  if (Movies.length > 1) {
    MovieList = Movies.map((m) => (
      <li key={m.id}>
        <Link to={`/details/movie/${m.id}`}   style={{textDecoration : "none" , color : "black"}}>
        <div
          className="card"
          style={{ width: "150px", minHeight: "300px", marginLeft: "30px" , cursor : " pointer" }}
        >
          <img
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
            src={imageid + m.poster_path}
            className="card-img-top"
            alt="..."
          />
          
              <br /> 
          <div className="card-body" style={{position : "relative"}}>
          <svg viewBox="0 0 36 36" style={{width : "50px" , position : "absolute" , marginTop : "-50%"}} className="circular-chart orange">
                <path
                    className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    strokeDasharray= {parseInt(m.vote_average * 10)} 
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                    {parseInt(m.vote_average * 10)}%
                </text>
          </svg>
            <p
              className="card-text"
              style={{
                fontFamily: "Gilroy",
                FontSize: "5px",
                wordSpacing: "1px",
              }}
            >
              {m.title}
            </p>
          </div>
        </div>
        </Link>
      </li>
    ));
  }

  return (
    <>
      <h4 className="container " style={{ marginLeft: "9%", marginTop: "3%" }}>
        Upcoming
      </h4>
      <ul
        className="d-flex container"
        id="list"
        style={{
          position: "relative",
          overflow: "auto",
          webkitScrollbar: "none",
          marginTop: "30px",
        }}
      >
        {MovieList}
      </ul>
    </>
  );
};

export default Upcoming;
