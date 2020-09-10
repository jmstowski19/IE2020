import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "./components/presentations/Home";
import {Reminder} from "./components/reminders/Reminder";
import {Login} from "./components/user/Login";
import {Register} from "./components/user/Register";
import {UserInfo} from "./components/user/UserInfo";
import {Logout} from './components/user/Logout';

export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route path = "/reminders" component={Reminder}/>
                <Route path = "/login" component={Login}/>
                <Route path = "/register" component={Register}/>
                <Route path = "/userinfo" component={UserInfo}/>
                <Route path = "/logout" component={Logout}/>
            </Switch>
        </>
    )
}