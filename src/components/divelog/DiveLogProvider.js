
//Provider for dive logs, handles promises to database
import React, { useEffect, useState } from "react"

export const LogContext = React.createContext()


export const DiveLogProvider = (props) => {
    const [diveLogs, setDiveLogs] = useState([])

    const getDiveLogs = () => {
        return fetch("http://localhost:3000/divelogs")
            .then(res => res.json())
            .then(setDiveLogs)
    }

    const addDiveLog = (diveLog) => {
        return fetch("http://localhost:3000/divelogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(diveLog)
        })
            .then(getDiveLogs)
    }

    const deleteLog = (logId) => {
        return fetch(`http://localhost:3000/divelogs/${logId}`, {
            method: "DELETE"
        })
            .then(getDiveLogs)
    }

    const editLog = (diveLog) => {
        return fetch(`http://localhost:3000//divelogs/${diveLog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(diveLog)
        })
            .then(getDiveLogs)
    }

    useEffect(() => {
        getDiveLogs()
    }, [])

    useEffect(() => {

    }, [diveLogs])

    return (
        <LogContext.Provider value={{
            diveLogs, addDiveLog, getDiveLogs, deleteLog, editLog
        }}>
            {props.children}
        </LogContext.Provider>
    )

}