import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../Serviсes/base";
import { Button, Checkbox, Form,Container } from 'semantic-ui-react';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password,  } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert('ты уже зареган пидор');
    }
  }, [history]);

  return (
    <Container>
      <Form onSubmit={handleSignUp} >
      <Form.Field>
        <label> Email </label>
        <input name="email" type="email" placeholder="Email"/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Регистрация</Button>
    </Form>
    </Container>
  );
};

export default withRouter(SignUp);