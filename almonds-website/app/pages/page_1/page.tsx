"use client"
import Footer from "@/app/components/footer/page"
import TopNavBar from "@/app/components/topNavBar/page"
import style from "./page.module.css"
import ImageSlider from "@/app/components/image_slideshow/page"

export default function Page01(){
    return (
        <>
            {/* Calls the  */}
            <TopNavBar/>
            <div className="flex">
                {/* side menu */}
                <div>
                    <div className={style.Sidebar}>
                        <div className={style.SidebarItem}>
                            <a href="#">Sidebar 1</a>
                        </div>
                        <div className={style.SidebarItem}>
                            <a href="#">Sidebar 2</a>
                        </div>
                        <div className={style.SidebarItem}>
                            <a href="#">Sidebar 3</a>
                        </div>
                    </div>
                </div>
                <div className={style.ImageSlideshow}>
                    <div>
                        <ImageSlider/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}