import React, {useState} from 'react'
import API from "../../services/api";
import {useHistory} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';



export const Register = () => {
    const history = useHistory();
    const [validated, setValidated] = useState(false);

    const onSubmit = (event) => {
      event.preventDefault();
      let formElements = event.currentTarget.elements;
      if (event.currentTarget.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
      console.log(event.currentTarget.elements.email.value);
        API.post('/users', {email: formElements.email.value, password: formElements.password.value})
            .then(response => {
                console.log('success')
                console.log('id:', response.id)
                
                history.push('/user')
            })
            .catch(errInfo => {
                
            })
    };


    return (
        <Form  noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" minlength="7" name="password" placeholder="Minimum Length = 7"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}