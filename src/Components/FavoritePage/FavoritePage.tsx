import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from "../../Auth/Auth";
import app from '../../Serviсes/base'


export function FavoritePage() {
    const imgUrl = 'https://image.tmdb.org/t/p/w300/';
    const { currentUser } = useContext(AuthContext);
    const [listBestFilms, setListBestFilms] = useState([])
    const base = app.database().ref('users/');
    const films: any  = []
    const removeFilm = (id: any) => {
        const base = app.database().ref(`users/${currentUser.uid}/films/${id}`);
        base.remove()
    }
    useEffect(() => {
        if (!currentUser) {
            return;
        }
        base.once('value', (snapshot) => {
            const listUsers = snapshot.val()
            if (listUsers[currentUser.uid]) {
                Object.entries(listUsers[currentUser.uid].films).forEach((el) => films.push(el[1]))
                setListBestFilms(films)
                console.log(films)

            }

        });

    }, []);

     return (
        <>
            <div>
                {listBestFilms.map((el: any) => {
                    return <div>

                        <h3>{el.title}</h3>
                        <img src={`${imgUrl}${el.imageUrl}`} />
                        <button onClick={() => { removeFilm(el.id) }}>удалить</button>
                    </div>
                })}
            </div>

        </>
    );
}

