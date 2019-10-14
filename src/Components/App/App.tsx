import React from 'react';
import Search from '../Header/Header';
import PageSearch from '../PageSearch/PageSearch'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App: React.FC = () => {



  return (
    <div className="app">
      <Router>
    <Search />
    <Route  path='/search'  exact render={()=> <PageSearch /> }/>
</Router>
    </div>
  );
}

export default App;
