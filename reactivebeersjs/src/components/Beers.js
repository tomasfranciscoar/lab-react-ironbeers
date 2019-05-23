import React from "react";
import Navbar from "./Navbar";

const Beers = ({ beers }) => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="uk-child-width-1@m" uk-grid="true">
          <div>
            {beers.map((beer, i) => 
              <div className="uk-card uk-card-default" key={i}>
              <div className="uk-card-media-top">
                <img src={beer.image_url} alt={beer.name} style={{height: "100px"}}/>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">{beer.name}</h3>
                <p>{beer.tagline}</p>
              </div>
            </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beers;
