import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { MovieCard, Movie } from '../Cards/MovieCard'
import { TvCard, TV } from '../Cards/TVCard'
import { PersonCard, Person } from '../Cards/PersonCard'
import DataBaseServises from '../../Servises/DataBaseServises'
const PageSearch = () => {

    const history = useHistory();
    const nameFilmFromUrl: string = decodeURI(history.location.search.split('=')[1])
     const dataBaseServises = new DataBaseServises();
    const [listFilms, setListFilms] = useState<(Movie | TV | Person)[]>([]);
    useEffect(() => {
    dataBaseServises.getSearchQuery(nameFilmFromUrl).then((result)=>{
        setListFilms(result)
    })
    }, [nameFilmFromUrl])

    return (

        <div>
            {
                listFilms.map((list) => {
                    switch (list.media_type) {
                        case 'movie':
                            return <MovieCard movie={list} />;
                        case 'tv':
                            return <TvCard tv={list} />;
                        case 'person':
                            return <PersonCard person={list} />;
                        default:
                            return null;
                    }

                })

            }

        </div>

    )

}





export default PageSearch