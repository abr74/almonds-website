"use client"
import Footer from "@/app/components/footer/page";
import TopNavBar from "@/app/components/topNavBar/page";
import style from "./page.module.css";

export default function Projects(){
    return(
        <>
            <TopNavBar/>
            <div>
                    <div className={style.Sidebar}>
                        <div className={style.SidebarItem}>
                            <a href="#">Professional</a>
                        </div>
                        <div className={style.SidebarItem}>
                            <a href="#">Academic</a>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}