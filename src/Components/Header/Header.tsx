import React, {useState,useContext} from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import { Menu ,Input, Container } from 'semantic-ui-react';
import app from '../../Serviсes/base'
import { AuthContext } from "../../Auth/Auth";

  function Search({history}:{history:any}){

const [ film, setFilm] = useState('')
const {currentUser} = useContext(AuthContext);

const getfilmName =(event:any)=>{
setFilm(event.target.value)
    }
    const query = (name:string) => {
        history.push(`${name}`);
      };    
    


    
    return (  
     <>
   {currentUser?'зареган':'не зареган'}  
        <Menu  stackable pointing secondary className='header-nav'>
        <Container>
    <NavLink   to='/movie'>

    <Menu.Item 
    className='header-nav__item'
    color='red'
  
    name='Фильмы'/>
    </NavLink>
    
    <NavLink to='/tv' >
    <Menu.Item
            className='header-nav__item'
    color='red'

    name='Сериалы'/>

    </NavLink>

    <NavLink to='/person'  >
    <Menu.Item
    className='header-nav__item' 
    color='red'
    name='Персоны'
    />
    </NavLink>
    {currentUser?
         <Menu.Item
         name='выйти'
         onClick={()=>{app.auth().signOut()}}
         />  :<NavLink to='/regist'>
           <Menu.Item
           name='регистрация'
           
           />
            </NavLink>  
    }
     {currentUser? null:
             <NavLink to='/login'>
             <Menu.Item
             name='войти'
             
             />
              </NavLink> 
    } 
        
   
    </Container>


    </Menu>
    <Container>
    <Input type='text' placeholder='Search...'
        onChange={getfilmName}
        value={film}
        >
        <input />
        
        <NavLink  to={`/search?q=${film}`} onClick={()=>{query(film)}}>Search</NavLink>
      </Input>
     </Container>
    </>
      )
}





export default withRouter(Search)