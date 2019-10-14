import React from 'react';
import Search from '../Header/Header';
import PageSearch from '../PageSearch/PageSearch'
import MoviePage  from '../ DetailPages/MoviePage'
import {BrowserRouter as Router,  Route } from 'react-router-dom';
const App: React.FC = () => {



  return (
    <div className="app">
      <Router>
    <Search />
    <Route  path='/search'  exact render={()=> <PageSearch /> }/>
    <Route  path='/movie/:id'  exact render={({match})=> <MoviePage  id={match.params.id}/>}/>

</Router>
    </div>
  );
}

export default App;
