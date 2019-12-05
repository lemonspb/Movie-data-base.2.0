import React, { useEffect, useContext, useState } from "react";
import DataBaseServices from "../../Serviсes/DataBaseServiсes";
import app from "../../Serviсes/base";
import { AuthContext } from "../../Auth/Auth";

function MoviePage({ id }: { id: number }) {
  const { currentUser } = useContext(AuthContext);
  const [movieInfo, setMovieInfo] = useState();
  const [comment, setComment] = useState<string>("");
  const [listComments, setListComments] = useState<any>([]);
  const onComment = (event: any) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    app
      .database()
      .ref("film-comments/" + `/${id}/${currentUser.uid}/${new Date()}`)
      .set({
        user: currentUser.displayName,
        comment,
        date: new Date().toLocaleString()
      });
  };

  useEffect(() => {
    const dataBaseServices = new DataBaseServices();

    dataBaseServices.getSpecificMovieInfo(id).then(result => {
      setMovieInfo(result.id);
      setMovieInfo(result);
    });
    return function name() {
      dataBaseServices.abort();
    };
  }, [id]);

  useEffect(() => {
    if (!app.database().ref("film-comments/")) {
      return;
    } else {
      app
        .database()
        .ref("film-comments/")
        .on("value", snapshot => {
          const commentRef = snapshot.val();
          if (commentRef[id]) {
            
           Object.values(commentRef[id]).map((el:any)=>{
               console.log(el)
            setListComments((prevState:any) => ([...prevState,...Object.values(el)]));

           
           })
          }
        });
    }
  }, [id]);
  console.log(listComments)
  function writeUserData(
    userId: any,
    id: any,
    title: any,
    imageUrl: any
  ): void {
    const rootRef = app.database().ref();
    const storesRef = rootRef.child("users/" + userId);
    storesRef.child(`films/${id}`).set({
      title,
      imageUrl,
      id
    });
  }

  return (
    <>
      {movieInfo ? (
        currentUser ? (
          <button
            onClick={() =>
              writeUserData(
                currentUser.uid,
                movieInfo.id,
                movieInfo.title,
                movieInfo.poster_path
              )
            }
          >
            добавить в избранное
          </button>
        ) : null
      ) : null}

      <input type="text" onChange={onComment} />
      <button onClick={addComment}>добавить комментарий</button>
      {listComments
        ? listComments.map((comments: any) => {
            console.log(comments.comment)
                       return (<div>
                  <div>{comments.comment}</div>
                  <div>{comments.user}</div>
                </div>
              );
              
          })

        : null}
    </>
  );
}
export default MoviePage;
