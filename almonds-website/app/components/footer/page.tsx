"use client"
import { Divider } from "@nextui-org/react"
import style from "./page.module.css"
export default function Footer(){
    return (

        <div id='footer-parent' className={style.footerParent}>
            <Divider className="my-4"/>
            <div id='footer-left-column' className={style.left}>
                <div id='footer-left-column-div' className={style.leftColumnDiv}>
                    <span>
                        <h3><b>Name</b></h3>
                        <h3>Street Name</h3>
                        <h3>City Name, State, Zipcode, Country</h3>
                    </span>
                </div>
            </div>
            <div id='footer-right-column' className={style.right}>
                <div id='footer-right-column-div' className={style.rightColumnDiv}>
                    <span>
                        {/* These will be links */}
                        <h3>Email Address</h3>
                        <h3>Social Media Icons or just Text</h3>
                        <h3>Phone Number</h3>
                    </span>
                </div>
            </div>
        </div>

    )
}