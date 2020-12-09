//Lists users most recent dives on the dashboard


import React, { useContext, useEffect } from "react"
import { LogContext } from "./DiveLogProvider"
import "./divelog.css"
import { Link } from "react-router-dom"
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AddCircleIcon from '@material-ui/icons/AddCircle';



export const DiveLogList = () => {
    const { diveLogs, getDiveLogs } = useContext(LogContext)

    useEffect(() => {
        getDiveLogs()
    }, [])

    return (
        <>
            <div className="recentDives">
                <div className="recentDivesTop">
                    <h3>Recent Dives</h3>
                    <Link className="viewAllBtnLink" to={{
                        pathname: `/divelog/all`,
                    }}>
                        <ViewComfyIcon className="viewAllBtn"/>
                    </Link>

                    <Link className="viewAllBtnLink" to={{
                        pathname: `/divelog/new`,
                    }}>
                        <AddCircleIcon className="addNewBtn"/>
                    </Link>

                </div>
                <article className="logListContainer">
                    {
                        diveLogs.reverse().map(dl => {
                            if (dl.userId === parseInt(localStorage.getItem("activeUser"))) {
                            for (let i = 0; i <= 5; i++) {
                                
                                    return (
                                        <Link className="log-link"
                                            to={{
                                                pathname: `/divelog/${dl.id}`,
                                                state: { chosenLog: dl }
                                            }}>
                                            <section id="logListItem" className={dl.id}>
                                                <h3 className="logTitle">{dl.title}</h3>
                                                <p className="log--date">{dl.date}</p>
                                                <p className="log--location">{dl.location}</p>
                                            </section>
                                        </Link>
                                    )
                                }

                            }


                        })
                    }
                </article>
            </div>
        </>
    )


}
