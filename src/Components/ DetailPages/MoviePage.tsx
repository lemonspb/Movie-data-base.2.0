import React, { useEffect, useContext, useState } from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'
import app from '../../Serviсes/base'
import { AuthContext } from "../../Auth/Auth";



function MoviePage({ id }: { id: number }) {
    const { currentUser } = useContext(AuthContext);
    const [movieInfo, setMovieInfo] = useState()

    const onComment = (event:any) =>{
        console.log(event.target.value)
    }

const addCommentElement  = (...comments:any) =>{
return false;
}

    const addComment = () =>{
        
        var commentsRef = app.database().ref('post-comments/' + 'fdf');
            console.log(commentsRef)
commentsRef.on('child_added', function(data) {
    console.log(data)
  addCommentElement('sdfsdfdfs', data.key, data.val().text, data.val().author);
});
    }

    useEffect(() => {
        const dataBaseServices = new DataBaseServices();

        dataBaseServices.getSpecificMovieInfo(id).then((result) => {
            setMovieInfo(result.id)
            setMovieInfo(result)
        })
       return function name() {
            dataBaseServices.abort()    
        }
        

    }, [id])

        function writeUserData(userId: any, id: any, title: any, imageUrl: any): void {
            const rootRef = app.database().ref();
            const storesRef = rootRef.child('users/' + userId);
           storesRef.child(`films/${id}`).set({
                     title,
                    imageUrl,
                    id
                   });
       
    }
   

    return (
        <>
            {movieInfo?currentUser?<button onClick={()=>writeUserData(currentUser.uid, movieInfo.id, movieInfo.title, movieInfo.poster_path )}>добавить в избранное</button>:null

            :null}

            <input type='text' onChange={onComment}/>
            <button  onClick={addComment}>добавить комментарий</button>
        </>
    );
}
export default MoviePage