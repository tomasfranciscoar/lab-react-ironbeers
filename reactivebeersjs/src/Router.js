import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Beers from "./components/Beers";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

const Router = ({beers}) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/beers" render={() => <Beers beers={beers} />} />
    <Route exact path="/beer/:id" component={BeerDetail} />
    <Route exact path="/random-beer" component={RandomBeer} />
    <Route exact path="/new-beer" component={NewBeer} />
  </Switch>
);

export default Router;