import React from 'react'
import Cookies from "js-cookie";
import API from "../../services/api";
import {Button, Form, Card} from "react-bootstrap";



export const PresentationDisplay = (props) => {
    const token=Cookies.get('token');

    function moreInfo() {
        return(
            <>
                <b>Starts at:</b> {props.date.substr(11, 5)}<br/>
                <b>Date:</b> {props.date.substr(0, 10)}<br/>
                <b>Keywords:</b> {props.keywords.join(' , ')}<br/>
                <b>Authors:</b> {props.authors.join(' , ')}<br/>
                <b>Session:</b> {props.session}<br/>
            </>
        )
    }

    function remPost() {
        console.log(props.id)
        API.post(`/reminders`,
            {   "presentationId": props.id,
                "notes": "",
                "enabled": true},
            {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                console.log('Reminder posted.');
            })
            .catch(errInfo => {
                console.log('Reminder post error: ', errInfo)
            });
    }

    
      const AddReminder= () => (
        <Form onSubmit = {remPost}>
            <Button type="submit">Add Reminder</Button>
        </Form>

        
      );


    return (
                    <Card style={{height: '30rem', width: "30rem"}}>
                    <Card.Body>
                      <Card.Title>{props.title}</Card.Title>
                      <Card.Text>
                      {moreInfo()}
                      </Card.Text>
                      <AddReminder/>
                    </Card.Body>
                  </Card>

    )
};