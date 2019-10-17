import React, { useEffect, useContext, useState } from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'
import app from '../../Serviсes/base'
import { AuthContext } from "../../Auth/Auth";



function MoviePage({ id }: { id: number }) {
    const { currentUser } = useContext(AuthContext);
    const [movieInfo, setMovieInfo] = useState()
    const dataBaseServices = new DataBaseServices();
    useEffect(() => {
        dataBaseServices.getSpecificMovieInfo(id).then((result) => {
            setMovieInfo(result.id)
            setMovieInfo(result)
        })

    }, [id])
        function writeUserData(userId: any, id: any, title: any, imageUrl: any): void {
            const rootRef = app.database().ref();
            const storesRef = rootRef.child('users/' + userId);
            const newStoreRef = storesRef.child(`films/id:${id}`).set({
                     title,
                    imageUrl
                   });
       
    }
   
    if(movieInfo){
        console.log(movieInfo.id)
    }
    
    return (
        <div className="card">
            {movieInfo?currentUser?<button onClick={()=>writeUserData(currentUser.uid, movieInfo.id, movieInfo.title, movieInfo.poster_path )}>fdf</button>:null

            :null}
        </div>
    );
}
export default MoviePage