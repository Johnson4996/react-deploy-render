//Lists users most recent dives on the dashboard


import React, { useContext, useEffect } from "react"
import { LogContext } from "./DiveLogProvider"
import "./divelog.css"
import { Link } from "react-router-dom"



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
                    <Link to={{
                        pathname: `/divelog/all`,
                    }}>
                        <p className="viewAllBtn">View All</p>
                    </Link>

                    <Link to={{
                        pathname: `/divelog/new`,
                    }}>
                        <p className="addLogBtn">+</p>
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
