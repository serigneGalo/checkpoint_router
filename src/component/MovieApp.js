import React from 'react';
import Description from "./Description";
import MovieCard from "./MovieCard";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function MovieApp() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={MovieCard}/>
                    <Route path="/:id" component={Description}/>
                </Switch>
            </Router>  
        </div>
    )
}
export default MovieApp;
