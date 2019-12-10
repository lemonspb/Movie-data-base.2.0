import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Serviсes/base";
import { AuthContext } from "../../Auth/Auth";
import { Button, Checkbox, Form,Container } from 'semantic-ui-react';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert('зарегайся пидор');
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (

        <Container>
        <Form onSubmit={handleLogin} >
        <Form.Field>
          <label> Email </label>
          <input name="email" type="email" placeholder="Email"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" type="password" placeholder="Password" />
        </Form.Field>
  
        <Button type='submit'>Войти</Button>
      </Form>
      </Container>
  );
};

export default withRouter(Login);