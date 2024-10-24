"use client"

import { Divider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import style from "./page.module.css"
export default function TopNavBar(){
    return (
        <>
        
            <Navbar isBordered>
                <NavbarBrand>
                    <p className={style.Logo}>Raymond Yu</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4">
                    <NavbarItem>
                        <Link color="foreground" href="../pages/projects">
                            <u>Projects</u>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="../pages/page_2">
                            <u>About</u>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

        </>
    )
}