import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assest/Screenshot 2023-01-12 170306.png'

const Nav = () => {
    return (
        <>        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#032541" , color : "white"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={logoImg} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  style={{color : "white"}}>
                        <span  style={{color : "white"}} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item  dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color : "white"}}>
                                    Movies
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/popular"}>Popular</Link></li>
                                    <li><Link className="dropdown-item" to={"/now_popular"}>Now Playing </Link></li>
                                    <li><Link className="dropdown-item" to={"/Upcoming"}>Upcoming</Link></li>
                                    <li><Link className="dropdown-item" to={"/top_rated"}>Top Rated</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item  dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color : "white"}}>
                                    Tv Shows
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to= {"/tv_popular"}>Popular</Link></li>
                                    <li><Link className="dropdown-item" to="/airing_today">Airing Today</Link></li>
                                    <li><Link className="dropdown-item" to="/On_tv">On TV</Link></li>
                                    <li><Link className="dropdown-item" to="/tv_Top_rated">Top Rated</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color : "white"}}>
                                    People
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/PopularPeople">Popular People</a></li>
                                </ul>
                            </li>
                            <li className="nav-item  dropdown">
                                <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color : "white"}}>
                                    More
                                </a>
                                {/* <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex"T role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>



        </>

    )
}

export default Nav