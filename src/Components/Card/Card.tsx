import React from 'react';


interface CardProps {
    list:{
    title: string,
     id: number,
     overview: string,
     poster_path: string,
    }
   
  }

function Card({
    list  }: CardProps){

console.log(list)
  return (
    <div className="card">
        {list.title}
        {list.overview}
        <img src={`https://image.tmdb.org/t/p/w300//${list.poster_path}`}></img>
    </div>
  );
}

export default Card
