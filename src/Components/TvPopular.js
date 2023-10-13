import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import "../public/welcome.css"

const TvPopular = () => {
    const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
 
  const getPopular = async (page) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${page}`
      );
 
      setMovies([...movies, ...data.results]);

    } catch (err) {
      console.log(err);
    }
  };
 

  const getNext = () => {
    setpage(page + 1);
  };
 
  useEffect(() => {
    getPopular(page);
  }, [page]);
 
  const imageid = `https://image.tmdb.org/t/p/w500`;
 
  console.log(movies, "test");
 
  return (
    <div style={{ minHeight: "100vh", overflow: "auto" , width : "100%"  }}>
      <h4  style={{ marginLeft: "5%", marginTop: "3%" ,fontSize : "2.5rem" }}>
      Popular TV Shows
      </h4>
      <ul
        type="none"
        className="d-flex "
        id="list"
        style={{
            display  : "flex" ,
          position: "relative",
          flexWrap: "no-wrap",
          WebkitScrollbar: "none",
          marginTop: "30px",
          width : "100%",
          minHeight : "100vh"
        //   overflow : "auto"
        }}
      >
        <InfiniteScroll 
          dataLength={movies.length} //This is important field to render the next data
          next={getNext}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          //   refreshFunction={this.refresh}
          //   pullDownToRefresh
          //   pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: "center" }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          }
        >
          {movies &&
            movies.map((m) => (
                <li key={m.id}>
                <Link to={`/details/tv/${m.id}`}  style={{textDecoration : "none" , color : "black"}}>
                <div className="card" style={{ width: "150px", position : "relative" , minHeight: "300px" , marginLeft : "30px" , cursor : "pointer" }}>
                  <img
                    style={{ width: "100%", height: "200px", objectFit: "cover" , borderRadius : "20px" }}
                    src={imageid + m.poster_path}
                    className="card-img-top"
                    alt="..."
                  />
                        
                      <br /> 
                  <div className="card-body">
                  <svg viewBox="0 0 36 36" style={{width : "50px" , marginTop : "-4rem" , marginLeft :"0rem" }} className="circular-chart orange">
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
                    <p className="card-text" style={{fontFamily : "Gilroy" , FontSize : "5px" , wordSpacing : "1px"}}>{m.original_name}</p>
                  </div>
                </div>
                </Link>
              </li>
            ))}
        </InfiniteScroll>
      </ul>
    </div>
  )
}

export default TvPopular