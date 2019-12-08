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
      .ref("film-comments/" + `/${id}/`)
      .push({
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
          const arr = [];
          for (const comment in commentRef[id]) {
            arr.push({
                user: commentRef[id][comment].user,
                comment: commentRef[id][comment].comment,
                date: commentRef[id][comment].date
              });
              setListComments(arr)
        }
        });
    }
  }, [id]);

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
        ?Object.values(listComments).map((comments: any) => {
            console.log(comments)
                       return (<div>
                  <div>{comments.comment}</div>
                  <div>{comments.user}</div>
                  <div>{comments.date}</div>

                </div>
              );
              
          })

        : null}
    </>
  );
}
export default MoviePage;
