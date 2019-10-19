import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from "../../Auth/Auth";
import app from '../../Serviсes/base'


export function FavoritePage() {
    const imgUrl = 'https://image.tmdb.org/t/p/w300/';
    const [listBestFilms, setListBestFilms] = useState<any[]>([])
    const { currentUser } = useContext(AuthContext);
    const removeFilm = (id: any) => {
        app.database().ref(`users/${currentUser.uid}/films/${id}`).remove();
    }
    useEffect(() => {
        if (!currentUser) {
            return;
        }
        app.database().ref('users/').on('value', (snapshot) => {
            const listUsers = snapshot.val()
            if (listUsers[currentUser.uid]) {
                setListBestFilms(Object.entries(listUsers[currentUser.uid].films).map((el) =>  el[1]))
                }
            });
        }, [currentUser]);
         
     return (
        <>
            <div>
            {listBestFilms?listBestFilms.map((el: any) => {
                    return <div key={el.id}>

                        <h3>{el.title}</h3>
                        <img src={`${imgUrl}${el.imageUrl}`} alt={el.title}/>
                        <button onClick={() => { removeFilm(el.id) }}>удалить</button>
                    </div>
                }):null}
            </div>

        </>
    );
}

