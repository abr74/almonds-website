"use client"
import { Divider } from "@nextui-org/react"
import style from "./page.module.css"
import Image from "next/image"
export default function Footer(){
    return (

        <div id='footer-parent' className={style.footerParent}>
            <Divider className="my-4"/>
            <div id='footer-right-column' className={style.right}>
                <div id='footer-right-column-div' className={style.rightColumnDiv}>
                    <div style={{display: "justify"}}>
                        {/* These will be links */}
                        <div className={style.leftColumnDiv}>
                            <span>
                                <h3><b>Contact</b></h3>
                                <h3><u><a href="">LinkedIn</a></u> <u><a href="">Instagram</a></u></h3>
                                <h3>ray2852@gmail.com</h3>
                                <h3>929-305-7361</h3>
                            </span>
                            
                        </div>
                        {/* <div className={style.LinkedIn}></div> */}
                        
                    </div>
                </div>
            </div>
        </div>

    )
}