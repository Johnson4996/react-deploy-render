import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import logo from "./images/logo.png"
import "./scubalog.css"



export const ScubaLog = () =>(

<>
<Route render={() => {
    if (localStorage.getItem("activeUser")) {
        return (
            <>
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
            </div>
                <Route render={props => <ApplicationViews {...props} />} />
            </>
        )
    } else {
        return <Redirect to="/login" />
    }
}} />

<Route path="/login" render={props => <Login {...props} />} />
<Route path="/register" render={props => <Register {...props} />} />
</>

)


