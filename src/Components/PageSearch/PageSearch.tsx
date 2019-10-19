import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { MovieCard, Movie } from '../Cards/MovieCard'
import { TvCard, TV } from '../Cards/TVCard'
import { PersonCard, Person } from '../Cards/PersonCard'
import DataBaseServiсes from '../../Serviсes/DataBaseServiсes'
const PageSearch = () => {

    const history = useHistory();
    const nameFilmFromUrl: string = decodeURI(history.location.search.split('=')[1])
     const dataBaseServiсes = new DataBaseServiсes();
    const [listFilms, setListFilms] = useState<(Movie | TV | Person)[]>([]);
    useEffect(() => {
        dataBaseServiсes.getSearchQuery(nameFilmFromUrl).then((result)=>{
        setListFilms(result)
    })
    }, [dataBaseServiсes,nameFilmFromUrl])

    return (

        <div>
            {
                listFilms.map((list) => {
                    switch (list.media_type) {
                        case 'movie':
                            return <MovieCard movie={list} key={list.id}/>;
                        case 'tv':
                            return <TvCard tv={list} key={list.id}/>;
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