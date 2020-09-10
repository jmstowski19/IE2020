import React, {useEffect, useState, useContext} from 'react'
import Cookies from "js-cookie";
import {ReminderDisplay} from "./ReminderDisplay";
import {config} from "../../configuration.js";
import {Table} from "react-bootstrap";
import API from "../../services/api";

export const Reminder = () => {
    const [logged, setLogged] = useState(false);
    const [reminders, setReminders] = useState([]);
    const token=Cookies.get('token')
    

    useEffect( () => {
        if(token != null) {
            setLogged(true);
            API.get('/reminders', {headers:{Authorization:`Bearer ${token}`}})
                .then(response => {
                    console.log('Reminders claimed.');
                    setReminders(response.data);
                })
                .catch(errInfo => {
                    console.log('Reminders error: ', errInfo)
                });
        }
        }, //eslint-disable-next-line
        []);

    if(logged)
        return (
            // <div className="site-card-border-less-wrapper">
            //     <Row>
            //         {reminders.map(rem =>
            //             <Col span={6} key={rem.id}>
            //                 <div className="card-content">
            //                     <RemDisplay presId={rem.presentationId} remId={rem.id} token={token}/>
            //                 </div>
            //             </Col>

            //         )}
            //     </Row>
            // </div>
            <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {reminders.map(rem => (
              <th key={rem.id}><ReminderDisplay presId={rem.presentationId} remId={rem.id} token={token}/></th>
            ))}
          </tr>
        </thead>
        </Table>
        );
    else
        return (
            <>The user is not logged.</>
        );
};
