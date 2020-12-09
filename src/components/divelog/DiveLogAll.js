
//display all dive logs in the database for the current user

import React, { useEffect, useContext } from "react"
import { LogContext } from "./DiveLogProvider"
import { Link } from "react-router-dom"
import AddIcon from '@material-ui/icons/Add'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const DiveLogAll = () => {
    const { diveLogs, getDiveLogs } = useContext(LogContext)

    useEffect(() => {
        getDiveLogs()
    }, [])

    return (
        <>
            <Link className="log-link"
                to={{ pathname: `/`, }}>
                <ArrowBackIosIcon/>
            </Link>
            <h2>All Dives</h2>
            <div className="line"></div>
            <div className="allDiveLogs">
                <Link className="add-log-link"
                    to={{ pathname: `/divelog/new`, }}>
                    <div className="plusIcon"><AddIcon fontSize="large"/><br/>Add New Dive Log</div>
                </Link>
                {


                    diveLogs.reverse().map(dl => {

                        if (dl.userId === parseInt(localStorage.getItem("activeUser"))) {
                            return (
                                <Link className="log-link-all"
                                    to={{
                                        pathname: `/divelog/${dl.id}`,
                                        state: { chosenLog: dl }
                                    }}>
                                    <section className="logText">
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