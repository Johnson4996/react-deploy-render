
//display all dive logs in the database for the current user

import React, { useEffect, useContext } from "react"
import {LogContext } from "./DiveLogProvider"
import { Link } from "react-router-dom"

export const DiveLogAll = () =>{
    const {diveLogs,getDiveLogs} = useContext(LogContext)

    useEffect(() => {
        getDiveLogs()
    }, [])

    return(
        <>
        <Link className="log-link"
        to={{ pathname: `/`,}}>
            <button>Dashboard</button>
            </Link>
            <h2>All Dives</h2>
            <div className="line"></div>
            <div className="allDiveLogs">
            <Link className="log-link"
        to={{ pathname: `/divelog/new`,}}>
            <div className="addNewLog"><p>Add New Log</p></div>
            </Link>
            {

                
                diveLogs.reverse().map(dl => {
                  
                        if(dl.userId === parseInt(localStorage.getItem("activeUser"))){
                            return(
                                <Link className="log-link-all"
                                to={{
                                    pathname: `/divelog/${dl.id}`,
                                    state: { chosenLog: dl }
                                }}>
                            <section className = {dl.id}>
                                <h3 className="logTitle">{dl.title}</h3>
                                <p className="log--date">{dl.date}</p>
                                <p className="log--location">{dl.location}</p>
                            </section>
                            </Link>
                                )
                        }
                
                    
                })
            }
            </div>
        </>
    )


}