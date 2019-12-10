import React, { useEffect, useContext, useState, useRef } from 'react';
import { AuthContext } from "../../Auth/Auth";
import app from "../../Serviсes/base";
import { Button, Checkbox, Form,Container,Icon } from 'semantic-ui-react';
import './PrivatePage.scss'

export function PrivatePage() {

const [newName, setNewName] = useState<string>('')
const { currentUser } = useContext(AuthContext);
const [imageName, setImageName] = useState<any>('выбрать фото')
const setName = (event:any) =>{
 setNewName(event.target.value)
}
const saveNewName = () =>{
    app.auth().onAuthStateChanged((user) => {
        if (user) { 
          user.updateProfile({
            displayName: newName
          })
        }
      });


}   


const setPhoto = (event:any) =>{
    console.log(event.target.files)
    setImageName(event.target.files[0].name)
  const avatarStgRef =  app.storage().ref("Usuarios/" + currentUser.uid + `/${event.target.files[0].name}`).put(event.target.files[0]);
  avatarStgRef.then((snapshot)=>{
    snapshot.ref.getDownloadURL().then((url)=>{ 
        currentUser.updateProfile({
            photoURL: url       
        }).then(()=>{
            app.database().ref("Usuarios/" + currentUser.uid).set({
              "photoUri": url   
            });
        });
    });
});
}
console.log(currentUser.displayName)

        return (
        <>
            <Container>
      <Form>
      <Form.Field>
        <label> Извенить имя </label>
        <input type="text" onChange={setName} placeholder='Ввести имя' />
        <Button onClick={saveNewName}>Изменить имя</Button>

      </Form.Field>
      <Form.Field>
      <input type="file" name="file" id="file" className="inputfile" onChange={setPhoto} />
        <label htmlFor="file"  > {imageName}  <Icon name='download'  /></label>
                
      </Form.Field>
    </Form>
    </Container>

    
        </>
    );
}

