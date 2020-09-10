import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import '../../index.css'
import API from '../../services/api'
import Cookies from 'js-cookie'
import {Form, Button, Alert, ButtonGroup} from "react-bootstrap";



export const Login = () => {
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    

    const onSubmit = (event) => {
        let formElements = event.currentTarget.elements;
        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        setValidated(true);
        const credentials=btoa(`${formElements.email.value}:${formElements.password.value}`);
        API.post('/auth', {}, {headers:{Authorization:`Basic ${credentials}`}})
            .then(response => {
                console.log('Login successful.');
                Cookies.set('token', response.data.token, {expires: 1});
                history.push('/userinfo')
            })
            .catch(errInfo => {
                console.log("error");
            })
    };

    return(
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  required type="email" name="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name = "password" minlength="7" placeholder="Password" />
                </Form.Group>
                    <ButtonGroup>
                    <Button variant="success" type="submit" >
                        Login
                    </Button>    
                    <Button href="/register">Link to Register</Button>
                    </ButtonGroup>
                    
            </Form>
        
    )
}