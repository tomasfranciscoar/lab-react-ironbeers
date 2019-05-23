import React from "react";
import { Link } from "react-router-dom";


const Home = () => (
  <div>
    <div className="uk-child-width-1@m" uk-grid="true">
    <div>
      <Link to="/beers">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="../../images/amie-johnson-1272491-unsplash.jpg"
              alt="beers"
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">All beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div>
      <Link to="/random-beer">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="../../images/rhett-wesley-479644-unsplash.jpg"
              alt="random-beer"
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Random beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div>
      <Link to="/new-beer">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="../../images/tatiana-rodriguez-1196504-unsplash.jpg"
              alt="new beer"
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">New beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  </div>
  
);

export default Home;
