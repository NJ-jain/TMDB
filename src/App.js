// import logo from './logo.svg';
// import './App.css';
import {Routes , Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import DetailsMovie from "./Components/DetailsMovie";
import Popular from "./Components/Popular";
// import Nowplaying from "./Components/Nowplaying";
import Nowplaying from "./Components/Nowplaying";
import UpcomingPage from "./Components/UpcomingPage";
import TopRated from "./Components/TopRated";
import TvPopular from "./Components/TvPopular";
import DetailsTv from "./Components/DetailsTv";
import Tv_airing_today from "./Components/Tv_airing_today";
import Ontv from "./Components/Ontv";
import Popular_People from "./Components/Popular_People";
import Tv_Top_rated from "./Components/Tv_Top_rated";
import Details_People from "./Components/Details_People";
import SearchAPI from "./Components/SearchAPI";
function App() {
  return (
    <>
    {/* <h1>hello</h1> */}
      <Nav />   
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/movie/:id" element={<DetailsMovie/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/now_popular" element={<Nowplaying />}/>
                <Route path="/Upcoming" element={<UpcomingPage />}/>
                <Route path="/top_rated" element={<TopRated />}/>
                <Route path="/tv_popular" element={<TvPopular/>}/>
                <Route path="/airing_today" element={<Tv_airing_today/>}/>
                <Route path="/details/tv/:tvid" element={<DetailsTv/>}/>
                <Route path="Search/:query" element = {<SearchAPI/>}/>
                <Route path="/On_tv" element={<Ontv/>}/>
                <Route path="/tv_Top_rated" element={<Tv_Top_rated/>}/>
                <Route path="/PopularPeople" element={<Popular_People/>} />
                <Route path="/PopularPeople/:personid" element={<Details_People/>} />

      </Routes>
    </>
  );
}

export default App;


// 3d5ee98de2566bea09128ac1a2e86a29