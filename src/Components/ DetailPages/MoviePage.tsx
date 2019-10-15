import React,{useEffect} from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'



 function MoviePage({id}:{id:number}) {

    const dataBaseServices = new DataBaseServices();
    useEffect(() => {
        console.log(id)
        dataBaseServices.getIdMovie(id).then((result)=>{
            console.log(result)
            })
    }, [dataBaseServices,id])
   

    return (
        <div className="card">
 
        </div>
    );
}
export  default MoviePage