import React from 'react'
import {Presentation} from "./Presentation";
import {Session} from "./Session";
import {Room} from "./Room";
import {Accordion, Card, Button, Tab, Col, Nav, Row} from "react-bootstrap"


export const Home = () => {

    return (
        <>
           
            <Accordion defaultActiveKey="null">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Sessions
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><Session/></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Room
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body><Room/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <hr/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Monday</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tuesday</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Wednesday</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fourth">Thursday</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fifth">Friday</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Presentation date='2019-09-02'/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Presentation date='2019-09-03'/>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey="third">
                        <Presentation date='2019-09-04'/>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey="fourth">
                        <Presentation date='2019-09-05'/>
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey="fifth">
                        <Presentation date='2019-09-06'/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </>
    )
};