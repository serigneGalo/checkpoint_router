import React from "react";

function Filter() {
    const data = require('../datas.json');
    const movies = data.item;
    return (
        <div >
            <input type="text" name="nameFilted" placeholder="Name filtred"/><br/><br/>
            <input type="number" max="5" min="1" name="rateFiltred" placeholder="Rate filtred"/>
        </div>
        );
    }
    export default Filter;
    /* { movies.map((movie)=>{
        if (movie.title==="OBSESSED") {
            
         return(
             <div key={movie.id}>
                 {movie.title}
             </div>
         )
        }
        return(<div key={movie.id}>
         {movie.PosterURL}
     </div>)
     })} */