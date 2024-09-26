"use client"

import { Divider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"

export default function TopNavBar(){
    return (
        <>
        
            <Navbar>
                <NavbarBrand>
                    {/* <Logo/> */}
                    <p className="font-bold text-inherit">Logo Name</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            <u>Page 1</u>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            <u>Page 2</u>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            <u>Page 3</u>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Divider/>
        </>
    )
}