
//contains all input for a single dive log with editing ability



import React, { useContext, useState, useEffect } from "react"
import { LogContext } from "./DiveLogProvider"
import { SuitContext } from "../suittype/SuitTypeProvider"
import { TankContext } from "../tanktype/TankTypeProvider"



export const DiveLogForm = (props) => {

    const { diveLogs, getDiveLogs, editLog, addDiveLog } = useContext(LogContext)
    const { suitTypes, getSuitTypes } = useContext(SuitContext)
    const { getTankTypes, tankTypes } = useContext(TankContext)


    const [diveLog, setDiveLog] = useState({})

    //check if in edit mode
    const editMode = props.match.params.hasOwnProperty("diveLogId")  // true or false

    //handle user input changes
    const handleControlledInputChange = (event) => {

        const newDiveLog = Object.assign({}, diveLog)
        newDiveLog[event.target.name] = event.target.value
        setDiveLog(newDiveLog)
    }

    //grab the log requested in display in edit mode
    const getLogInEditMode = () => {
        if (editMode) {
            const diveLogId = parseInt(props.match.params.diveLogId)
            const selectedLog = diveLogs.find(l => l.id === diveLogId) || {}
            setDiveLog(selectedLog)
        }
    }

    useEffect(() => {
        getDiveLogs()
        getSuitTypes()
        getTankTypes()
    }, [])


    useEffect(() => {
        getLogInEditMode()
    }, [diveLogs])

    //if in edit mode, PUT changes, otherwise POST a new log
    const constructNewLog = () => {
        const suitTypeId = parseInt(diveLog.suitTypeId)
        const tankTypeId = parseInt(diveLog.tankTypeId)

        if ((suitTypeId === 0) || (tankTypeId === 0)) {
            window.alert("Please select a suit and tank type")
        } else {
            if (editMode) {

                editLog({
                    id: diveLog.id,
                    title: diveLog.title,
                    date: diveLog.date,
                    location: diveLog.location,
                    surfaceInterval: diveLog.surfaceInterval,
                    pressureGroupEnter: diveLog.pressureGroupEnter,
                    pressureGroupExit: diveLog.pressureGroupExit,
                    bottomTime: diveLog.bottomTime,
                    maxDepth: diveLog.maxDepth,
                    avgDepth: diveLog.avgDepth,
                    airEnter: diveLog.airEnter,
                    airExit: diveLog.airExit,
                    tankSize: diveLog.tankSize,
                    tankTypeId: tankTypeId,
                    weight: diveLog.weight,
                    suitTypeId: suitTypeId,
                    weatherConditions: diveLog.weatherConditions,
                    comments: diveLog.comments,
                    verifyName: diveLog.verifyName,
                    verifyCert: diveLog.verifyCert,
                    verifyType: diveLog.verifyType,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/"))
            } else {


                addDiveLog({
                    title: diveLog.title,
                    date: diveLog.date,
                    location: diveLog.location,
                    surfaceInterval: diveLog.surfaceInterval,
                    pressureGroupEnter: diveLog.pressureGroupEnter,
                    pressureGroupExit: diveLog.pressureGroupExit,
                    bottomTime: diveLog.bottomTime,
                    maxDepth: diveLog.maxDepth,
                    avgDepth: diveLog.avgDepth,
                    airEnter: diveLog.airEnter,
                    airExit: diveLog.airExit,
                    tankSize: diveLog.tankSize,
                    tankTypeId: tankTypeId,
                    weight: diveLog.weight,
                    suitTypeId: suitTypeId,
                    weatherConditions: diveLog.weatherConditions,
                    comments: diveLog.comments,
                    verifyName: diveLog.verifyName,
                    verifyCert: diveLog.verifyCert,
                    verifyType: diveLog.verifyType,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/"))
            }
        }
    }

    return (
        <>
            <h2 className="diveLogForm__title">{editMode ? "Update Log" : "New Log"}</h2>
            <form className="diveLogForm">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" required autoFocus className="form-control"
                            placeholder="Title"
                            defaultValue={diveLog.title}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date: </label>
                        <input type="date" name="date" required className="form-control"
                            defaultValue={diveLog.date}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Location: </label>
                        <input type="text" name="location" required className="form-control"
                            placeholder="Where were you?"
                            defaultValue={diveLog.location}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="surfaceInterval">SI: </label>
                        <input type="text" name="surfaceInterval" required className="form-control"
                            placeholder="00:00"
                            defaultValue={diveLog.surfaceInterval}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="pressureGroupEnter">PG Enter: </label>
                        <input type="text" name="pressureGroupEnter" required className="form-control"
                            placeholder="A"
                            defaultValue={diveLog.pressureGroupEnter}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="pressureGroupExit">PG Exit: </label>
                        <input type="text" name="pressureGroupExit" required className="form-control"
                            placeholder="B"
                            defaultValue={diveLog.pressureGroupExit}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="bottomTime">Bottom Time: </label>
                        <input type="text" name="bottomTime" required className="form-control"
                            placeholder="00:00"
                            defaultValue={diveLog.bottomTime}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="maxDepth">Max Depth: </label>
                        <input type="text" name="maxDepth" required className="form-control"
                            defaultValue={diveLog.maxDepth}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="avgDepth">Avg Depth: </label>
                        <input type="text" name="avgDepth" required className="form-control"
                            defaultValue={diveLog.avgDepth}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="airEnter">Air Enter (psi): </label>
                        <input type="text" name="airEnter" required className="form-control"
                            defaultValue={diveLog.airEnter}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="airExit">Air Exit (psi): </label>
                        <input type="text" name="airExit" required className="form-control"
                            defaultValue={diveLog.airExit}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="tankSize">Tank Size: </label>
                        <input type="text" name="tankSize" required className="form-control"
                            defaultValue={diveLog.tankSize}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="tankTypeId">Tank Type: </label>
                        <select name="tankTypeId" className="form-control"
                            value={diveLog.tankTypeId}
                            onChange={handleControlledInputChange}>

                            <option value="0">Select a Tank Type</option>
                            {tankTypes.map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="weight">Weight: </label>
                        <input type="text" name="weight" className="form-control"
                            value={diveLog.weight}
                            onChange={handleControlledInputChange}>
                        </input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="suitTypeId">Suit Type: </label>
                        <select name="suitTypeId" className="form-control"
                            value={diveLog.suitTypeId}
                            onChange={handleControlledInputChange}>

                            <option value="0">Select a Suit Type</option>
                            {suitTypes.map(s => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="weatherConditions">Weather: </label>
                        <input type="text" name="weatherConditions" className="form-control"
                            placeholder="Was it sunny, cloudy, raining?"
                            value={diveLog.weatherConditions}
                            onChange={handleControlledInputChange}>
                        </input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="comments">Comments: </label>
                        <textarea type="text" name="comments" className="form-control"
                            value={diveLog.comments}
                            onChange={handleControlledInputChange}>
                        </textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="verifyName">Verify Name </label>
                        <input type="text" name="verifyName" className="form-control"
                            value={diveLog.verifyName}
                            onChange={handleControlledInputChange}>
                        </input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="verifyCert">Certification Number: </label>
                        <input type="text" name="verifyCert" className="form-control"
                            value={diveLog.verifyCert}
                            onChange={handleControlledInputChange}>
                        </input>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="verifyType">Type: </label>
                        <input type="text" name="verifyType" className="form-control"
                            placeholder="Buddy, Instructor, Etc."
                            value={diveLog.verifyType}
                            onChange={handleControlledInputChange}>
                        </input>
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        constructNewLog()
                    }}
                    className="btn btn-primary btnAddLog">
                    {editMode ? "Save Changes" : "Create New Entry"}
                </button>
                <button 
                    onClick={evt => {
                        evt.preventDefault()
                        props.history.push("/divelog/all")
                    }}
                    className="btn btn-primary btnCancel">
                    
                </button>
            </form>
        </>
    )
}
