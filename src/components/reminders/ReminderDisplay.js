import React, {useEffect, useState} from 'react'
import {notification} from "antd";
import API from "../../services/api";
import {Card, Button, Form, OverlayTrigger, FormControl, Popover} from "react-bootstrap"

export const ReminderDisplay = (props) => {
    const [rem, setRem] = useState('')
    const [pres, setPres] = useState('')

    function moreInfo() {
        return(
            <>
                <b>Date:</b> {pres.date}<br/>
                <b>Keywords:</b> {pres.keywords}<br/>
                <b>Authors:</b> {pres.authors}<br/>
                <b>Session:</b> {pres.session}<br/>
                <b>Note:</b> {rem.notes}<br/>
            </>
        )
    }

    function remPut(event) {
        event.preventDefault();
        let formElements = event.currentTarget.elements;
        API.put(`/reminders/${rem.id}`,{ "presentationId": `${pres.id}`, "notes": formElements.note.value,
            "enabled": true }, {headers:{Authorization:`Bearer ${props.token}`}})
            .then(response=>{
                console.log("Note changed")
                setRem({"id": rem.id, "presentationId": rem.presentationId, "notes": formElements.note.value, "enabled": true})
            })
            .catch(err=>{
                console.log(err)
            })
    }

    function remDelete() {
        API.delete(`/reminders/${rem.id}`, {headers:{Authorization:`Bearer ${props.token}`}})
            .then(res=>{
                notification.open({
                    message: 'Deleted',
                    description: 'Reminder deleted!',
                    duration: 3,
                });
                window.location.reload();
            })
            .catch(err=>{
                notification['error']({
                    message: 'Error!',
                    description: 'Delete error!'
                })
            })
    }

    const popover = (
        <Form onSubmit={remPut}>
        <Popover id="popover-basic" style={{width: '20rem'}}>
          <Popover.Title as="h3" >Stick you note to reminder</Popover.Title>
    <Popover.Content>
        <FormControl name="note"/>
        <Button type="submit">Submit</Button>
        </Popover.Content>
        </Popover>
        </Form>
      );

      const popoverDelete = (
        <Form onSubmit={remDelete}>
            <Popover id="popover-basic" style={{width: '20rem'}}>
            <Popover.Title as="h3" >Are you sure, that you want delete this reminder?</Popover.Title>
            <Popover.Content>
            <Button type="submit">Delete</Button>
            </Popover.Content>
            </Popover>
        </Form>
      );
    
      const AddNote= () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="success">Add Note</Button>
        </OverlayTrigger>
      );


      const DeleteReminder = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverDelete}>
        <Button variant="danger">Delete</Button>
      </OverlayTrigger>
      )

    useEffect( () => {
        API.get(`/reminders/${props.remId}`, {headers:{Authorization:`Bearer ${props.token}`}})
            .then(response => {
                console.log('Reminder claimed.');
                setRem(response.data);
            })
            .catch(errInfo => {
                console.log('Reminder error: ', errInfo)
            });

        API.get(`/presentations/${props.presId}`, {headers:{Authorization:`Bearer ${props.token}`}})
            .then(response => {
                console.log('Presentation claimed.');
                setPres(response.data);
            })
            .catch(errInfo => {
                console.log('Presentation error: ', errInfo)
            });
        }, //eslint-disable-next-line
        []);

    return (
        <Form>
        <Card style={{height: '30rem', width: "30rem"}}>
                    <Card.Body>
                      <Card.Title>{pres.title}</Card.Title>
                      <Card.Text>
                      {moreInfo()}
                      </Card.Text>
                      <AddNote/>     <DeleteReminder/>
                    </Card.Body>
                  </Card>
                  </Form>
    )
};