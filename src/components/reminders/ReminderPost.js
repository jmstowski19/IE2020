import React, {useEffect} from 'react'
import API from "../../services/api";
import Cookies from "js-cookie";
import {config} from "../../configuration.js"

export const RemPost = (props) => {
    const token=Cookies.get('token')
    // const ob = {
    //     presentationId: props.presId,
    //     notes: '',
    //     enabled: true
    // }

    useEffect( () => {
        // if(token !=null) {
        //     fetch(`${config.baseURL}/reminders`, {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //              Authorization: `Bearer ${token}`
        //         },
        //         body: JSON.stringify(ob)
        //         })
        //         .then(res => res.json())
        // }
        API.post(`/reminders`, {
            "presenationId": props.presId,
            "notes": '',
            "enabled": true
        },
        {headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            console.log('Reminder posted.');
        })
        .catch(errInfo => {
            console.log('Reminder post error: ', errInfo)
        });
     //eslint-disable-next-line
        },[]);

    return (
        <></>
    )
};