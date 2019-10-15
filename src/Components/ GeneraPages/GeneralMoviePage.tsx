import React,{useEffect, useState} from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'
import { MovieCard, Movie } from '../Cards/MovieCard'



 function GeneralMoviePage() {

    const dataBaseServices = new DataBaseServices();
    const [listFilms, setListFilms] = useState<(Movie)[]>([]);

    useEffect(() => {
        dataBaseServices.getPopularMovieList().then((result)=>{
            console.log(result)
            setListFilms(result.results)
            })
    }, [])

    return (
        <div className="card">
        {listFilms.map((film)=>(

<MovieCard movie={film} />
        )
    

        )}
        </div>
    );
}
export  default GeneralMoviePage