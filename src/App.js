import './App.css';
import MovieCard from "./component/MovieCard";
import MovieList from './component/MovieList';
import { useState } from "react";
import Description from './component/Description'
/* import Filter from './component/Filter';
 */
/* function getValue() {
  var inputName = document.getElementById("nameMovie").value;
  var inputPoster = document.getElementById("porsterUrl").value;
  var inputRate = document.getElementById("rate").value;
  var inputDescription = document.getElementById("description").value;
console.log(inputName+inputPoster+inputRate+inputDescription);
  return 
} */

function App() {

  const[newMovie, setNewMovie]=useState({
    "title": "",
    "PosterURL":"",
    "rate": "",
    "description":""
  })

  return (
    <div className="App">
      {/* <div className="movielist_filter">
        <Filter/>
      </div> */}
      <Description/>
      <div>
        <MovieCard/>
      </div>
      <br/>
      <div className="movieList_Add">
        <div>
          <MovieList/>
        </div>
        <div>
          <h1>Add Movie</h1>
          <input type="text" id="nameMovie" placeholder="Name of movie" onChange={e=>{setNewMovie(e.target.value)}}/><br/><br/>
          <input type="text" id="porsterUrl" placeholder="Link of movie picture"onChange={e=>{setNewMovie(e.target.value)}} /><br/><br/>
          <input type="number" id="rate" placeholder="Rate of movie" max="5" min="1" style={{width:"255px"}} onChange={e=>{setNewMovie(e.target.value)}}/><br/><br/>
          <input type="text" id="description" placeholder="Description of movie" onChange={e=>{setNewMovie(e.target.value)}}/><br/><br/>
          <button onClick={()=>console.log(newMovie)}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
