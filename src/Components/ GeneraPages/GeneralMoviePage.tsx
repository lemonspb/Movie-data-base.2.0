import React, { useEffect, useState } from 'react';
import DataBaseServices from '../../Serviсes/DataBaseServiсes'
import { MovieCard, Movie } from '../Cards/MovieCard'
import { Container } from 'semantic-ui-react';
import Pagination from '../Pagination/Pagination'
import '../../index.scss'
import { NavLink, withRouter, Link } from 'react-router-dom'


function GeneralMoviePage({ history }: { history: any }) {

    const [listFilms, setListFilms] = useState<(Movie)[]>([]);
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const dataBaseServices = new DataBaseServices();

        dataBaseServices.getPopularMovieList(+history.location.search.slice(7) || 1).then((result) => {
            setListFilms(result.results)

        })
        return function name() {
            dataBaseServices.abort()
        }
    }, [history.location])

    const changePage = (data: any) => {
        setPageNumber(data)
        history.push(data)

    }


    return (
        <Container className='d-flex'>
            {listFilms.map((film) => (

                <MovieCard movie={film} key={film.id} />
            )


            )}
            <Pagination changePage={changePage} linkName={`movie`} numberPage={pageNumber} />
        </Container>
    );
}
export default withRouter(GeneralMoviePage)