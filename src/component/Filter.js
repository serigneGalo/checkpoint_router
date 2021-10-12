import React, { useState } from "react";
/* import DATAS from "../datas.json";
 */
function Filter() {

    const data = require('../datas.json');
    const movies = data.item;


 const[titleSearch, setTitleSearch]= useState({"title": "liste",})
const[rateSearch, setRateSearch]= useState({"rate": 0,})
/*
function filtring() {
        var inputName = document.getElementById("nameFilted").value;
        var inputRate = document.getElementById("rateFiltred").value;
        setFiltredMovie(inputName,inputRate)
        return alert(filtredMovie);

} */
/*     const m=DATAS.item;
 */
    return (
        <div>
            <input type="text" id="nameFilted" placeholder="Name filtred" onChange={e=>{setTitleSearch(e.target.value)}}/><br/>
            {movies.filter((val)=>{
                if(titleSearch===""){
                    return val
                } else if (val.title.includes(titleSearch)) {
                    return val
                }
            }).map((val,key)=>{
                return (
                    <div key={key}>
                        {val.title}
                    </div>
                )
            })}
                <br/><br/>
            <input onChange={e=>{setRateSearch(e.target.value)}} type="number" style={{width:"255px"}}  max="5" min="1" id="rateFiltred" placeholder="Rate filtred"/><br/><br/>
            {movies.filter((val)=>{
                if(rateSearch==""){
                    return val.title
                } else if (val.rate==rateSearch) {
                    return val.title
                }
            }).map((val,key)=>{
                return (
                    <div key={key}>
                        {val.title}
                    </div>
                )
            })}
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