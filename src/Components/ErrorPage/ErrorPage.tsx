import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ErrorImg from '../../img/404.png'


export default class ErrorPage extends Component {

    render() {

        return (

            <div>
                <img src ={ErrorImg} alt='Error404'/>
                <Link to='/movie'>На главную</Link>
            </div>

        )


    }
}