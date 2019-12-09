import React, { useEffect, useContext, useState } from "react";
import DataBaseServices from "../../Serviсes/DataBaseServiсes";
import app from "../../Serviсes/base";
import { AuthContext } from "../../Auth/Auth";
import { Button, Comment, Form, Header, Image,Container } from 'semantic-ui-react'
import  avatar from '../../img/9146052847594.jpeg'

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
        user: 'неизвестно' || currentUser.displayName,
        userImg:  avatar || currentUser.photoURL ,
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
                userImg: commentRef[id][comment].userImg,
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
    <Container>
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


      {listComments
        ?Object.values(listComments).map((comments: any) => {
                       return (
                    <Comment>
                    <Image src={`${comments.userImg}`} avatar/>
                    <Comment.Content>
                      <Comment.Author >Имя: {comments.user }</Comment.Author>
                      <Comment.Metadata>
                        <div>{comments.date}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comments.comment}</Comment.Text>
                    
                    </Comment.Content>
                  </Comment>
              );
              
          })
        : null}
        <Form reply>
      <Form.TextArea onChange={onComment}/>
      <Button content='добавить комментарий' labelPosition='left' icon='edit' primary  onClick={addComment}/>
    </Form>
        </Container>
    </>
  );
}
export default MoviePage;
