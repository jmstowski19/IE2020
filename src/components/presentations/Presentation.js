import React, {useEffect, useState} from 'react'
import API from "../../services/api";
import {PresentationDisplay} from "./PresentationDisplay";
import {Table} from "react-bootstrap";


export const Presentation = (props) => {
    const [presentations, setPresentations] = useState([]);

    useEffect( () => {
            API.get(`/presentations?date=${props.date}`, {})
                .then(response => {
                    console.log('Presentations claimed.');
                    setPresentations(response.data);
                })
                .catch(errInfo => {
                    console.log('Presentations error: ', errInfo)
                });
        }, //eslint-disable-next-line
        []);

    return (
        <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {presentations.map(pres => (
              <th key={pres.id}><PresentationDisplay keywords={pres.keywords} authors={pres.authors} title={pres.title}
                                                filename={pres.filename} session={pres.session} id={pres.id}
                                                date={pres.date}/></th>
            ))}
          </tr>
        </thead>
        </Table>
  
    )
};