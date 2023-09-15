import React from "react";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
} from "../../../images";
import { Link } from "react-router-dom";

const images = [banner1, banner2, banner3, banner4, banner5, banner6];

const Header = () => {
  return (
    <>
    <div className="container mt-5 carousel">
      <div className="row">
        <div className="col">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Carousel image"
          className="banner-bg d-block w-100 bg-dark bg-gradient "
        />
            <div className="text-header">
              <h1>Find your favorite food recipe here </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                <br />
                minima molestiae in et porro rem enim sit alias, eaque cum
                <br />
                voluptates magni dolores ut. <br />
              </p>
              <Link to='/'>
              <button className="btn btn-dark">Search Recipe</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
     
    
    </>
  );
};

export default Header;
