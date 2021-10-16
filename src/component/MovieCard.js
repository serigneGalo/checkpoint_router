import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RatingView } from 'react-simple-star-rating'
import React, { useState } from "react";
import '.././App.css';
import { Link } from 'react-router-dom';

function MovieCard() {
    const data = require('../datas.json');
    const movies = data.item;
    const [titleSearch, setTitleSearch] = useState("");
    const [rateSearch, setRateSearch] = useState("");

    var moviesFiltredTitle = movies.filter(item => item.title.toLocaleLowerCase().includes(titleSearch.toLocaleLowerCase()));
    var moviesFiltredRate = movies.filter(item => item.rate === parseInt(rateSearch))

    return (
        <>
            <input type="text" id="nameFiltred" placeholder="Name filtred" onChange={e => { setTitleSearch(e.target.value) }} /><br /><br />
            <input type="number" id="rateFiltred" max="5" min="0" placeholder="Rate filtred" onChange={e => { setRateSearch(e.target.value) }} /><br /><br />
            <div className="gridMovie">
                <div className="movieCard">
                    {(titleSearch && rateSearch === "") ?
                        (moviesFiltredTitle.map((movie) => {
                            return (
                                <div className="card" style={{ width: '18rem' }} key={movie.id}>
                                    <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p>
                                            <Link to={{pathname:`/Description/:${movie.id}`, state: movie}}><p className="card-text">{movie.description}</p></Link>                                                
                                        </p>
                                        <p className="card-text">{movie.description}</p>                                           
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{movie.trailler}</li>
                                        <li className="list-group-item"><RatingView ratingValue={movie.rate} /></li>
                                    </ul>
                                </div>
                            )
                        })
                        ) :
                        (rateSearch !== "") ?
                            (moviesFiltredRate.map((movie) => {
                                return (
                                    <div className="card" style={{ width: '18rem' }} key={movie.id}>
                                        <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                                <Link to={{pathname:`/Description/:${movie.id}`, state: movie}}><p className="card-text">{movie.description}</p></Link>
                                            <p className="card-text">{movie.description}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{movie.trailler}</li>
                                            <li className="list-group-item"><RatingView ratingValue={movie.rate} /></li>
                                        </ul>
                                    </div>
                                )
                            }
                            )
                            ) :
                            (moviesFiltredTitle.map((movie) => {
                                return (
                                    <div className="card" style={{ width: '18rem' }} key={movie.id}>
                                        <img src={movie.PosterURL} className="card-img-top" alt="moviePoster" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <Link to={{pathname:`/Description/:${movie.id}`, state: movie}}><p className="card-text">{movie.description}</p></Link> 
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{movie.trailler}</li>
                                            <li className="list-group-item"><RatingView ratingValue={movie.rate} /></li>
                                        </ul>
                                    </div>
                                )
                            })
                            )
                    }
                </div>
            </div>
            
        </>

    );
}
export default MovieCard;