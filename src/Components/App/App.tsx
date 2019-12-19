import React from 'react';
import Search from '../Header/Header';
import Footer from '../Footer/Footer';
import PageSearch from '../PageSearch/PageSearch'
import GeneralMoviePage from '../ GeneraPages/GeneralMoviePage'
import MoviePage  from '../ DetailPages/MoviePage'
import {AuthProvider} from '../../Auth/Auth'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import LoginPage from '../RegistrationPage/LoginPage'
import {FavoritePage} from '../FavoritePage/FavoritePage'
import {PrivatePage } from '../Private/PrivatePage'
import ErrorPage  from '../ErrorPage/ErrorPage'
import './App.scss';
import {BrowserRouter as Router,  Route,Switch, Redirect } from 'react-router-dom';

const App: React.FC = () => {



  return (
    <div className="app">
       <AuthProvider>
      <Router>
    <Search />
    <main className='contant'>
<Switch>
    <Route  path='/search'  exact render={()=> <PageSearch /> }/>
    <Route  path='/regist/'  exact render={ ()=> <RegistrationPage />}/>
    <Route  path='/login/'  exact render={ ()=> <LoginPage />}/>
    <Route  path='/favorite/'  exact render={ ()=> <FavoritePage />}/>
    <Route  path='/movie/'  exact render={ ()=> <GeneralMoviePage />}/>
    <Route  path='/movie/:id'  exact render={({match})=> <MoviePage  id={match.params.id}/>} />
    <Route  path='/movie/'  exact render={ ()=> <GeneralMoviePage />}/>
    <Route  path='/private/'  exact render={ ()=> <PrivatePage />}/>
    <Route path='/error-page'  component ={ErrorPage} />
    <Redirect to='/error-page' />
    </Switch>
    </main>
    <Footer />
</Router>
</AuthProvider>
    </div>
  );
}

export default App;
