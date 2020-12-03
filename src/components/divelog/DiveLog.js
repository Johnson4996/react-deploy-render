
// The full HTML rendering of a single Dive Log



import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { SuitContext } from "../suittype/SuitTypeProvider"
import { TankContext } from "../tanktype/TankTypeProvider"

export const DiveLog = ({ diveLog }) => {
    const { suitTypes } = useContext(SuitContext)
    const { tankTypes } = useContext(TankContext)


    //find tank and suit types from foreign key
    const foundSuit = suitTypes.map(s => s.id === diveLog.suitTypeId ? s.name : "")
    const foundTank = tankTypes.map(t => t.id === diveLog.tankTypeId ? t.name : "")

    return (
        <>
            <Link className="log-link"
                to={{ pathname: `/`, }}>
                <button>Dashboard</button>
            </Link>
            <div className="diveLogDetailsContainer">
                <article className="detailsLeft">
                    <h2 className="dlTitle">{diveLog.title}</h2>
                    <p className="dlDate">{diveLog.date}</p>
                    <p className="dlLocation">{diveLog.location}</p>
                    <p className="dlSi">SI: {diveLog.surfaceInterval}</p>
                    <p className="dlPgEnter">PG: {diveLog.pressureGroupEnter}</p>
                    <p className="dlPgExit">PG: {diveLog.pressureGroupExit}</p>
                    <p className="dlBt">Bottom: {diveLog.bottomTime}</p>
                    <p className="dlMaxDepth">Max Depth: {diveLog.maxDepth}</p>
                    <p className="dlAvgDepth">Avg Depth: {diveLog.avgDepth}</p>

                </article>
                <section className="detailsRight">
                    <div className="infoContent">
                        <div className="tankInfo">
                            <h3>Tank Info</h3>
                            <p>Air Enter: {diveLog.airEnter}</p>
                            <p>Air Exit: {diveLog.airExit}</p>
                            <p>Tank Size: {diveLog.tankSize}cu. ft</p>
                            <p>Tank Type: {foundTank}</p>
                        </div>
                        <div className="suitInfo">
                            <h3>Suit Info</h3>
                            <p>Weight Used: {diveLog.weight}</p>
                            <p>Suit Type: {foundSuit}</p>
                        </div>
                    </div>
                    <div className="weatherComments">
                        <h3>Other Info</h3>
                        <div className="wContainer">
                            <p>Weather Conditions: {diveLog.weatherConditions}</p>
                            <p>Comments: {diveLog.comments}</p>
                        </div>
                    </div>

                </section>
            </div>
            <div className="buddyInfo">
                <h3>Verification</h3>
            <p> Buddy Type: {diveLog.verifyType}</p>
            <p>Name: {diveLog.verifyName}</p>
            <p>Cert #: {diveLog.verifyCert}</p>
            </div>
        </>
    )
}

