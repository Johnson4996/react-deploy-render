


//provider for suit types

import React, { useEffect, useState } from "react"

export const SuitContext = React.createContext()


export const SuitTypeProvider = (props) => {
    const [suitTypes, setSuitTypes] = useState([])

    const getSuitTypes = () => {
        return fetch("http://localhost:3000/suittypes")
            .then(res => res.json())
            .then(setSuitTypes)
    }

    useEffect(() => {
        getSuitTypes()
    }, [])

    useEffect(() => {

    }, [suitTypes])

    return (
        <SuitContext.Provider value={{
            suitTypes, getSuitTypes
        }}>
            {props.children}
        </SuitContext.Provider>
    )

}