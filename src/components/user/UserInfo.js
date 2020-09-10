import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {config} from '../../configuration'
import {Card} from "react-bootstrap";

export const UserInfo = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [logged, setLogged] = useState(false);

    useEffect( () => {
        const token=Cookies.get('token');

        if(token != null) {
            setLogged(true);
            fetch(`${config.baseURL}/users/me`, {headers:{Authorization:`Bearer ${token}`}})
                .then(res => {
                    console.log('Data claimed.');
                    return res.json();
                    
                })
                .then(data =>{
                    setId(data.id)
                    setEmail(data.email);
                    setCreatedAt(data.createdAt);
                })
                .catch(errInfo => {
                    console.log('Data error: ', errInfo)
                });
        }
    }, //eslint-disable-next-line
    []);

    if(logged)
        return (
            <Card>
                <b>User id:  {id}</b><br/>
                <b>User email: {email}</b><br/>
                <b>User created at: {createdAt}</b>
            </Card>
        )
    else
        return (
            <>The user is not logged.</>
        );
};