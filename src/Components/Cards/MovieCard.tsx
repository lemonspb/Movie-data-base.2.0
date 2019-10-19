import React from 'react';
import { Link } from 'react-router-dom'
import ru from 'date-fns/locale/ru';
import { format } from 'date-fns'
import { Progress } from 'semantic-ui-react';
import './MovieCard.scss'
export interface Movie {
        media_type: 'movie',
        title: string,
        id: number,
        overview: string,
        poster_path: string,
        release_date: any,
        vote_average: number,
}

export function MovieCard({ movie }: { movie: Movie  }) {
const imgUrl = 'https://image.tmdb.org/t/p/w300/'
; 

function releaseDate(date:string){ 
return format(new Date(date),'d MMMM yyyy',{locale: ru})
}

return (
        <>
     <Link to={`/movie/${movie.id}`}><div className="card-movie">
        
         <img src={`${imgUrl}${movie.poster_path }`}  alt={movie.title}/>
         <div className='overlay'>
         <div>{movie.title}</div>
         <div>{movie.overview}</div>
         {movie.release_date?<div>{releaseDate(movie.release_date)}</div>: null}
         <Progress percent={movie.vote_average*10} color='green' />
        {movie.vote_average*10}%
        </div>
        </div>

        </Link>
        </>
    );
}

