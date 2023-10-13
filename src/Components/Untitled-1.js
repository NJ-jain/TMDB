// import React from "react";
// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const Popular = () => {
//   const [Movies, setMovies] = useState([]);
//   // const [MovieId, setMovieId] = useState("");
//   const [page, setpage] = useState(1);
//   const getPopular = async (page) => {
//       try {
//           const { data } = await axios.get(
//               `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${page}`
//               );
//               const Result = data.results;
//               setMovies((list) => {
//                   console.log(list);
//                   const updatedData = [...list, Result];
                  
//                   return updatedData;
//                 });
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         console.log(Movies);
//         useEffect(() => {
//             getPopular(page);
//         }, [page]);


//         const getNext = () =>{
//             setpage(page+1)
//         }
        
//         const imageid = `https://image.tmdb.org/t/p/w500`;

// //   let MovieList = "Loading...";
// const MovieList = 
// //   if (Movies.length > 1)
//     Movies.length && 
//     <InfiniteScroll
//       dataLength={Movies.length} //This is important field to render the next data
//       next={getNext}
//       hasMore={true}
//       loader={<h4>Loading...</h4>}
//       endMessage={
//         <p style={{ textAlign: "center" }}>
//           <b>Yay! You have seen it all</b>
//         </p>
//       }
//       // below props only if you need pull down functionality
//       //   refreshFunction={this.refresh}
//       //   pullDownToRefresh
//       //   pullDownToRefreshThreshold={50}
//       pullDownToRefreshContent={
//         <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
//       }
//       releaseToRefreshContent={
//         <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
//       }
//     >
//       {Movies.map((m) => (
//         <li key={m.id} className="col-md-2" style={{ marginBottom: "30px" }}>
//           <Link
//             to={`/details/${m.id}`}
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <div
//               className="card "
//               style={{
//                 width: "150px",
//                 minHeight: "300px",
//                 marginLeft: "30px",
//                 cursor: "pointer",
//               }}
//             >
//               <img
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   objectFit: "cover",
//                   borderRadius: "20px",
//                 }}
//                 src={imageid + m.poster_path}
//                 className="card-img-top"
//                 alt="..."
//               />
//               <div className="card-body">
//                 <p
//                   className="card-text"
//                   style={{
//                     fontFamily: "Gilroy",
//                     FontSize: "5px",
//                     wordSpacing: "1px",
//                   }}
//                 >
//                   {m.title}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </li>
//       ))}
//     </InfiniteScroll>;

//     // MovieList =
  

//   return (
//     <>
//       <h4 className="container " style={{ marginLeft: "9%", marginTop: "3%" }}>
//         Popular Movies
//       </h4>
//       <ul
//         type="none"
//         className="d-flex container"
//         id="list"
//         style={{
//           position: "relative",
//           flexWrap: "wrap",
//           webkitScrollbar: "none",
//           marginTop: "30px",
//         }}
//       >
//         {MovieList}
//       </ul>
//       <div class="d-grid gap-2 pb-5">
//         <button
//           onClick={setpage(page + 1)}
//           class="btn btn-primary"
//           type="button"
//         >
//           Load More
//         </button>
//       </div>
//     </>
//   );
// };

// export default Popular;
