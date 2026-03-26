import React, { useEffect, useState } from "react";
const MovieApp = ()=>{
const [data,setData] = useState(null)
console.log(setData);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cd2cdfb0167b82ff34be19c6c4586e93')
        .then(res=> res.json())
        .then((e)=> setData(e))
        .catch(error=> console.log("error aagya",error))

    },[])
    return data
}

export default MovieApp