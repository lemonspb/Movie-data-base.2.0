import React,{useEffect, useState} from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'
import { MovieCard, Movie } from '../Cards/MovieCard'
import {Container } from 'semantic-ui-react';



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
        <Container>
        {listFilms.map((film)=>(

<MovieCard movie={film} key={film.id}/>
        )
    

        )}
        </Container>
    );
}
export  default GeneralMoviePage