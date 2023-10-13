import React from "react";
import logo from "../assest/Screenshot 2023-01-12 170306.png"

const Footer = () => {
  return (
    <>
      <div class="card text-center" style={{backgroundColor : "#032541" , color : "white"}}>
        <div class="card-header">Featured</div>
        <img src={logo} style= {{width : "250px" , left : "50%" , marginLeft : "43%"}}  alt="" />
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
};

export default Footer;
