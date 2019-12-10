import React, {useState,useContext} from 'react'
import { NavLink,withRouter, Link} from 'react-router-dom'
import { Menu ,Input, Container,Image,Button,Icon } from 'semantic-ui-react';
import app from '../../Serviсes/base'
import { AuthContext } from "../../Auth/Auth";
import './Header.scss';

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

    <NavLink to='/person' >
    <Menu.Item
    className='header-nav__item' 
    color='red'
    name='Персоны'
    />
    </NavLink>
    {currentUser?
         <Menu.Item
         className='header-nav__item' 

         name='выйти'
         onClick={()=>{app.auth().signOut()}}
         />  :<NavLink to='/regist'>
           <Menu.Item
                    className='header-nav__item' 

           name='регистрация'
           
           />
            </NavLink>  
    }
     {currentUser? null:
             <NavLink to='/login'>
             <Menu.Item
                                 className='header-nav__item' 

             name='войти'
             
             />
              </NavLink> 
    } 
        
      {currentUser?<NavLink to='/favorite' >
    <Menu.Item
    className='header-nav__item' 
    color='red'
    name=' Избранное'
    /></ NavLink>:null}  
   

{currentUser?
<NavLink to='/private'

className='header-nav__item header-nav__item--private'
>
    <Image src={`${currentUser.photoURL}`} avatar />
    <span>{currentUser.displayName}</span>
    </NavLink>:null}
    </Container>


    </Menu>
    <Container>
      <div className='search-block'>
    <Input type='text' placeholder='Search...'
        onChange={getfilmName}
        value={film}
        className='search-input'>
      </Input>
      <Link  to={`/search?q=${film}`} onClick={()=>{query(film)}}><Button className='search-block__btn'><Icon disabled name='search'/></Button></Link>
      </div>
     </Container>
    </>
      )
}





export default withRouter(Search)