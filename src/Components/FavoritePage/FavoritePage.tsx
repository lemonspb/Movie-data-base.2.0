import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from "../../Auth/Auth";
import app from '../../Serviсes/base'
import { Container,Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import '../FavoritePage/FavoritePage.scss'

export function FavoritePage() {
    const imgUrl = 'https://image.tmdb.org/t/p/w300/';
    const [listBestFilms, setListBestFilms] = useState<any[]>([])
    const { currentUser } = useContext(AuthContext);
    
    console.log(currentUser)
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

                setListBestFilms(Object.entries(listUsers[currentUser.uid].films).map((el) =>  {
                    console.log(el)
                    return  el[1]
                }
                ))
                }
                else{
                    setListBestFilms([])
                }
            });
        }, [currentUser]);

        return (
        <>
        <Container>
            
            {listBestFilms.map((el: any) => {
                    return (<div key={el.id} className='favorite-item'>
                        <h3><Link  to={`/search?q=${el.title}`}>{el.title}</Link></h3>
                        <img src={`${imgUrl}${el.imageUrl}`} alt={el.title} className='favorite-item__img' />
                        <Button onClick={() => { removeFilm(el.id) }} className='favorite-item__btn'>удалить</Button>
                    </div>
            )}).reverse()
            }
        </Container>
        </>
    );
}

