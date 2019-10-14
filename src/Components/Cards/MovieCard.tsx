import React from 'react';
import { Link } from 'react-router-dom'


export interface Movie {
        media_type: 'movie',
        title: string,
        id: number,
        overview: string,
        poster_path: string,
        release_date: string,
}

export function MovieCard({ movie }: { movie: Movie  },{history}:{history:any}) {
const imgUrl = 'https://image.tmdb.org/t/p/w300/'
; 

    return (
        <>
     <Link to={`/movie/${movie.id}`}><div className="card">
        <div>{movie.title}</div>
         <img src={`${imgUrl}${movie.poster_path }`} />
         <div>{movie.overview}</div>

        </div>
        </Link>
        </>
    );
}

