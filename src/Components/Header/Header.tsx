import React, {useState, useEffect} from 'react'
import { Input } from 'semantic-ui-react'
import { Link,withRouter } from 'react-router-dom'


  function Search({history}:{history:any}){

const [ film, setFilm] = useState('')

const getfilmName =(event:any)=>{
setFilm(event.target.value)
    }
    const pageNumber = (pages:string) => {
        history.push(`${pages}`);
      };    


    return ( 
        <Input type='text' placeholder='Search...'
        onChange={getfilmName}
        value={film}
        >
        <input />
        
        <Link  to={`/search/?q=${film}`} onClick={()=>{pageNumber(film)}}>Search</Link>
      </Input>
      )
}





export default withRouter(Search)