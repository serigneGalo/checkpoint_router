import './App.css';
import MovieCard from "./component/MovieCard";
import MovieList from './component/MovieList';
import Filter from './component/Filter';

function App() {
  return (
    <div className="App">
      <div className="movieCard">
        <MovieCard/>
      </div>
      <MovieList/>
      <Filter/>
    </div>
  );
}

export default App;
