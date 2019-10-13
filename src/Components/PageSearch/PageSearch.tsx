import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import {MovieCard, Movie} from '../Cards/MovieCard'
import {TvCard, TV} from '../Cards/TVCard'
import {PersonCard, Person} from '../Cards/PersonCard'

const PageSearch = () => {
    const API_KEY: string = '23315c01cb32eba5fcb03d0ad0a1ef43';
    const BASE_URL: string = "https://api.themoviedb.org/3";
    const SEARCH_PARAMS: string = `api_key=${API_KEY}&language=ru`;
    const history = useHistory();
    const nameFilmFromUrl: string = decodeURI(history.location.search.split('=')[1])

    const [listFilms, setListFilms] = useState<(Movie | TV | Person)[]>([]);
    useEffect(() => {

        searchFilm(nameFilmFromUrl)
    }, [nameFilmFromUrl])

    function searchFilm(film: string) {
        fetch(`${BASE_URL}/search/multi?query=${film}&${SEARCH_PARAMS}`).then(
            async response => {
                if (response.status !== 200) {
                    return;
                }
                const data = await response.json();
                console.log()
                setListFilms(data.results)
            }
        );
    }

    return (
        
        <div>
{
    listFilms.map((el)=>{
if(el.media_type === 'movie')(
    <MovieCard movie={el}/>

)

})
    
}


 {/* {(() => {
        switch(listFilms) {
          case Movie:
             <MovieCard movie={listFilms} />;
          case TV:
             <TvCard tv={listFilms} />;
          case Person:
            <PersonCard person={listFilms} />;
          default:
            return null;
        }
      })()} */}
        </div>

    )

}





export default PageSearch