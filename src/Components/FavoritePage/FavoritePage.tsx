import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from "../../Auth/Auth";
import app from '../../Serviсes/base'


export function FavoritePage() {
    const imgUrl = 'https://image.tmdb.org/t/p/w300/'
        ;
    const { currentUser } = useContext(AuthContext);
    const [listBestFilms, setListBestFilms] = useState({})
    const starCountRef = app.database().ref('users/');
    if (app.auth().currentUser !== null) {
        starCountRef.once('value', async (snapshot) => {
            const listUsers = await snapshot.val()
            console.log(listUsers[currentUser.uid].films)
            Object.entries(listUsers[currentUser.uid].films).map((el) => el[1])
        });
    }

    return (
        <>
            <div>

            </div>

        </>
    );
}

