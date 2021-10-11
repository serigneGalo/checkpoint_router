import React, { useState } from "react";

function Filter() {
    /*     const movies = data.item;
    const data = require('../datas.json');
*/ 
const[filtredMovie, setFiltredMovie]= useState({
        "title": "",
        "rate": 0
})

    function getValue() {
        var inputName = document.getElementById("nameFilted").value;
        var inputRate = document.getElementById("rateFiltred").value
        return alert(inputName+inputRate);
        
}


    return (
        <div >
            <input type="text" id="nameFilted" placeholder="Name filtred"/><br/><br/>
            <input type="number" style={{width:"255px"}}  max="5" min="1" id="rateFiltred" placeholder="Rate filtred"/><br/><br/>
            <button type="button" onClick={getValue}>Filter</button>
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