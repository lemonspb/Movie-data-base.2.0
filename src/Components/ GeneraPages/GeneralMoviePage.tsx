import React,{useEffect, useState} from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'
import { MovieCard, Movie } from '../Cards/MovieCard'
import {Container } from 'semantic-ui-react';



 function GeneralMoviePage() {

    const [listFilms, setListFilms] = useState<(Movie)[]>([]);

    useEffect(() => {
        const dataBaseServices = new DataBaseServices();

        dataBaseServices.getPopularMovieList().then((result)=>{
            setListFilms(result.results)
            
            })  
            return function name() {
                dataBaseServices.abort()    
            }
        }, [])

    return (
        <Container>
        {listFilms.map((film)=>(

        <MovieCard movie={film} key={film.id}/>
        )
    

        )}
        </Container>
    );
}
export  default GeneralMoviePage