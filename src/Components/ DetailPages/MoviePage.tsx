import React,{useEffect} from 'react';
import DataBaseServises from '../../Servises/DataBaseServises'



 function MoviePage({id}:{id:number}) {

    const dataBaseServises = new DataBaseServises();
    useEffect(() => {
        console.log(id)
        dataBaseServises.getIdMovie(id).then((result)=>{
            console.log(result)
            })
    }, [dataBaseServises,id])
   

    return (
        <div className="card">
 
        </div>
    );
}
export  default MoviePage