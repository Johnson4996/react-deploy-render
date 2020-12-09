

//Handles creation of new wish list item by the user

import React, { useContext, useRef } from "react"
import {WishContext} from "./WishlistProvider"

export const WishListForm = (props)=> {
    const {addWish} = useContext(WishContext)
    const location = useRef("")

    const constructNewWish = () =>{
        if(location === ""){
            window.alert("Please enter a location")
        }else{
            addWish({
                location: location.current.value,
                userId: parseInt(localStorage.getItem("activeUser"))
            }).then(()=> props.history.push("/"))
        }
    }

return(
    <form>
        <h2 className="wishFormTitle">Where would you like to go?</h2>
        <div className="form-group">
                
                <input
                    placeholder="Enter the Location"
                    type="text"
                    id="wishLocation"
                    ref={location}
                    required
                    autoFocus
                    className="form-control"
                />
            </div>
            <button type="submit" 
            onClick={
                evt => {
                    evt.preventDefault() 
                    constructNewWish()
                }
            }
            className="submitWish"> Add to Wishlist </button>
            <button
            onClick={
                evt => {
                    evt.preventDefault() 
                    props.history.push("/")
                }
            }
            className="submitWish"> Cancel </button>
    </form>
)


}