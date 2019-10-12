import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Card from '../Card/Card'

const PageSearch = () =>{
    const API_KEY:string = '23315c01cb32eba5fcb03d0ad0a1ef43';
    const BASE_URL:string = "https://api.themoviedb.org/3";
    const SEARCH_PARAMS:string = `api_key=${API_KEY}&language=ru`;
    const history = useHistory();
    const nameFilmFromUrl:string = decodeURI(history.location.search.split('=')[1])

    const [listFilms, setListFilms] =useState([])
    useEffect(()=>{
     
        searchFilm(nameFilmFromUrl)
    },[nameFilmFromUrl])

    function searchFilm(film:string) {
        fetch(`${BASE_URL}/search/multi?query=${film}&${SEARCH_PARAMS}`).then(
          async response => {
            if (response.status !== 200) {
              return;
            }
         const data = await response.json();
         setListFilms(data.results)
          }
        );
      }

return (

<div>
{listFilms.map((list:any)=>(
    <Card list={list} key={list.id} />
))}
</div>

)

}





export default PageSearch