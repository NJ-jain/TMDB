import axios from "axios";
import React, { useEffect, useState } from "react";
import "../public/welcome.css";
// import "../public/script.js"
import { useParams } from "react-router-dom";
const DetailsMovie = () => {
  const [Movie, setMovie] = useState(null);
  const { id } = useParams();
  console.log(id);

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US`
      );
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
  }
  function randomHexColor() {
    let [r, g, b] = randomRgbColor();
    let hr = r.toString(16).padStart(2, "0");
    let hg = g.toString(16).padStart(2, "0");
    let hb = b.toString(16).padStart(2, "0");
    return "#" + hr + hg + hb;
  }

  let MovieDetails = "Loading...";
  if (Movie) {
    MovieDetails = (
      <div
        style={{
          width: "100%",
          height: "80vh",
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${Movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: "5vh",
          position: "relative",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div id="details">
          <h1 style={{ color: "white", fontWeight: "700", fontSize: "2.5rem" }}>
            {Movie.title}{" "}
            <span style={{ fontWeight: "500" }}>
              ({Movie.release_date.split("-")[0]}){" "}
            </span>{" "}
          </h1>
          <h5 style={{ color: "white" }}>
            {Movie.release_date.split("-")[2]}/
            {Movie.release_date.split("-")[1]}/
            {Movie.release_date.split("-")[0]}{" "}
            <span style={{ textTransform: "Uppercase" }}>
              ({Movie.original_language})
            </span>
            .
          </h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={parseInt(Movie.vote_average * 10)}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  {parseInt(Movie.vote_average * 10)}%
                </text>
              </svg>
            </div>
            <h4>
              User
              <br />
              Scrore
            </h4>
          </div>
          <h6 style={{ fontSize: "1rem" }}>{Movie.tagline}</h6>
          <h3>Overview</h3>
          <p style={{ width: "90%" }}>{Movie.overview}</p>
        </div>

        <div
          id="contant"
          style={{
            width: "100vw",
            height: "100%",
            backgroundColor: `${randomHexColor()}`,
            opacity: ".8",
          }}
        ></div>
        {/* <img src={`https://image.tmdb.org/t/p/w500/${Movie.backdrop_path}`} alt={Movie.poster_path} style= {{height : "100%" ,width : "100%" ,objectFit : "contain"  ,marginLeft : "17vw"}}/>  */}
        {/* <div id="blue" ></div> */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
          alt={Movie.poster_path}
          style={{
            height: "60vh",
            width: "20vw",
            borderRadius: "20px",
            zIndex: "77",
            position: "absolute",
            left: "4%",
            top: "10%",
            transform: "translate(0% , 0%)",
          }}
        />
      </div>
    );
  }

  return <>{MovieDetails}</>;
};

export default DetailsMovie;