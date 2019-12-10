import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ErrorImg from '../../img/404.png'
import { Container } from 'semantic-ui-react';
import './Errorpage.scss'

export default class ErrorPage extends Component {




    render() {
        return (    

            
                <Container>
                     <div className='error-page'>
                       <span className='error-page__title'> Такой страницы не существует! 
                    <Link to='/movie'>На главную</Link>
                    </span>
                    <img src ={ErrorImg} alt='Error404' className='error-page__img'/>
                    </div>
                </Container>
            

        )


    }
}