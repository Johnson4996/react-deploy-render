

//Renders the details page for a dive log

import React, { useContext } from "react"
import { LogContext } from "./DiveLogProvider"
import { DiveLog } from "./DiveLog"
import {Link} from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export const DiveLogDetail = (props) => {
    const { diveLogs, deleteLog } = useContext(LogContext)

    const chosenDiveLog = parseInt(props.match.params.diveLogId)
    const diveLog = diveLogs.find(l => l.id === chosenDiveLog) || {}


    //send dive log to HTML rep componet and render buttons 
    return (
        <>
        <div className="backToDash">
        <Link className="log-link" to={{ pathname: `/`, }}>
                <ArrowBackIosIcon/> 
            </Link>
            <p>Dashboard</p>
            </div>
            <div className="editDelContainer">
            <EditIcon className="log-link editBtn" onClick={() => {props.history.push(`/divelog/edit/${diveLog.id}`)}}/>
            <DeleteIcon className="log-link delBtn" onClick={() => deleteLog(diveLog.id).then(() => props.history.push("/divelog/all"))}/>
            </div>
            <DiveLog key={diveLog.id} diveLog={diveLog} />
            
        </>
    )



}