import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RatingView } from 'react-simple-star-rating'

function MovieCard() {
    const data = require('../datas.json');
    const movies = data.item;
    
    return (
        <>
            {movies.map((movie) => {
                return ( 
                    <div className="card" style={{width: '18rem'}} key={movie.id}>
                        <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><RatingView ratingValue={movie.rate} /></li>
                        </ul>
                    </div>
                    )
                })
            }
        </>
       
        );
}
export default MovieCard;