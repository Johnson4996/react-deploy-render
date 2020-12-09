import React from "react"
import { Route } from "react-router-dom"
import { DiveLogProvider } from "./divelog/DiveLogProvider"
import { DiveLogList } from "./divelog/DiveLogList"
import { DiveLogAll } from "./divelog/DiveLogAll"
import { DiveLogDetail } from "./divelog/DiveLogDetail"
import { DiveLogForm } from "./divelog/DiveLogForm"
import { SuitTypeProvider } from "./suittype/SuitTypeProvider"
import { TankTypeProvider } from "./tanktype/TankTypeProvider"
import { WishlistProvider } from "./wishlist/WishlistProvider"
import { WishListRender } from "./wishlist/WishRender"
import { WishListForm } from "./wishlist/WishListForm"




export const ApplicationViews = () => {
    return (
        <>

        
                <WishlistProvider>
                    <DiveLogProvider>
                        <SuitTypeProvider>
                            <TankTypeProvider>
                            
                                
                                    
                                    <Route exact path="/">
                                    <h2>Dashboard</h2>
                                <div className="line"></div>
                                    <div className="container">
                                    <div className="top-content">
                                        
                                        <DiveLogList />
                                        
                                    </div>
                                    <div className="bottom-content">
                                        <WishListRender />
                                     </div>
                                     </div>
                                    </Route>
                                    
                                
                                <Route path="/divelog/:diveLogId(\d+)" render={
                                    props => <DiveLogDetail {...props} />
                                } />
                                <Route exact path="/divelog/all">
                                    <DiveLogAll />
                                </Route>
                                <Route exact path="/divelog/new" render={(props) => {
                                    return <DiveLogForm {...props} />
                                }} />
                                <Route path="/divelog/edit/:diveLogId(\d+)" render={
                                    props => <DiveLogForm {...props} />
                                } />
                                <Route exact path="/wishlist/new" render={
                                    props => <WishListForm {...props} />
                                } />
                            </TankTypeProvider>
                        </SuitTypeProvider>
                    </DiveLogProvider>
                </WishlistProvider>
         

        </>

    )
}
