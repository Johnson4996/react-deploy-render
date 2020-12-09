
//Data provider for wish list 

import React, { useEffect, useState } from "react"

export const WishContext = React.createContext()


export const WishlistProvider = (props) => {
    const [wishes, setWishes] = useState([])

    const getWishes = () => {
        return fetch("http://localhost:3000/wishlist")
            .then(res => res.json())
            .then(setWishes)
    }

    const addWish = (wish) => {
        return fetch("http://localhost:3000/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wish)
        })
            .then(getWishes)
    }
    const deleteWish = (wishId) => {
        return fetch(`http://localhost:3000/wishlist/${wishId}`, {
            method: "DELETE"
        })
            .then(getWishes)
    }

    useEffect(() => {
        getWishes()
    }, [])

    useEffect(() => {

    }, [wishes])

    return (
        <WishContext.Provider value={{
            wishes, setWishes, addWish, getWishes, deleteWish
        }}>
            {props.children}
        </WishContext.Provider>
    )

}