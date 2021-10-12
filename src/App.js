import './App.css';
import MovieCard from "./component/MovieCard";
import MovieList from './component/MovieList';
import Filter from './component/Filter';

function getValue() {
  var inputName = document.getElementById("nameMovie").value;
  var inputPoster = document.getElementById("porsterUrl").value;
  var inputRate = document.getElementById("rate").value;
  var inputDescription = document.getElementById("description").value;
console.log(inputName+inputPoster+inputRate+inputDescription);
  return 
}

function App() {
  
  return (
    <div className="App">
      <div className="movieCard">
        <MovieCard/>
      </div>
      <br/>
      <div className="movielist_filter">
        <div>
          <MovieList/>
        </div>
        <div>
        <h1>Filter</h1>
          <Filter/>
        </div>
        <div>
          <h1>Add Movie</h1>
          <input type="text" id="nameMovie" placeholder="Name of movie" /><br/><br/>
          <input type="text" id="porsterUrl" placeholder="Link of movie picture" /><br/><br/>
          <input type="number" id="rate" placeholder="Rate of movie" max="5" min="1" style={{width:"255px"}}/><br/><br/>
          <input type="text" id="description" placeholder="Description of movie" /><br/><br/>
          <button onClick={getValue}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
