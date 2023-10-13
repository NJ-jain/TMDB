import React from 'react'
import Welcome from './Welcome'
import Pop from './Pop'
import Trending from './Trending'
import "../public/welcome.css"
import Upcoming from './Upcoming'
import Footer from './Footer'


const Home = () => {
  return (
    <>
        <Welcome />
        <Pop/>
        <Trending />
        <Upcoming />
        <Footer />
    </>
  )
}

export default Home