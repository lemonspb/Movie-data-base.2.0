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
     <Link to={`/movie/${movie.id}`} className="card-movie">
         <div className="card-movie__inner">
        
         <img src={`${imgUrl}${movie.poster_path }`}  alt={movie.title} className='card-movie__img'/>
         <div className='card-movie__overlay'>
         <div className='card-movie__title'>{movie.title}</div>
         <div className='card-movie__overview'>{movie.overview}</div>
         {movie.release_date?<div className='card-movie__overview'>Премьера: {releaseDate(movie.release_date)}</div>: null}
         <div className='card-movie__wrap-progress'><Progress percent={movie.vote_average*9.5} color='green'  className='card-movie__progress'/>
        <div className='card-movie__number'>{movie.vote_average*10}%</div></div>
          
        </div>
        </div>

        </Link>
        </>
    );
}

