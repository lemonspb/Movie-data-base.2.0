import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from "../../Auth/Auth";
import app from "../../Serviсes/base";


export function PrivatePage() {

const [newName, setNewName] = useState<string>('')
const { currentUser } = useContext(AuthContext);

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
          

            <input type="text" onChange={setName} />
            <button onClick={saveNewName}>Sign Up</button>
            <input type="file"  onChange={setPhoto}/>
        </>
    );
}

