import React, {useState} from 'react';
import logo from "../../assets/image 1.png"
import {Link} from "react-router-dom";
import {IoMenuSharp} from "react-icons/io5";
import { Button, Drawer } from 'antd';

function Navbar(props) {
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <div>
            <div className={"w-full fixed z-[9999] flex flex-wrap items-center justify-between px-[7%] py-5 text-white uppercase"}>
                <img src={logo} alt="logo" className={"w-[120px]"}/>
                <div className={"sm:hidden lg:flex flex gap-7 font-[600] text-[17px] "}>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/menu"}>MENU</Link>
                    <Link to={"/locations"}>lOCATIONS</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
                <div className={"sm:block lg:hidden"} >
                    <IoMenuSharp className={"text-[20px] cursor-pointer"} onClick={showDrawer}/>
                    <Drawer onClose={onClose} open={open}>
                        <div className={"flex flex-col gap-5 font-bold uppercase"}>
                            <Link to={"/"}>HOME</Link>
                            <Link to={"/about"}>ABOUT</Link>
                            <Link to={"/menu"}>MENU</Link>
                            <Link to={"/locations"}>lOCATIONS</Link>
                            <Link to={"/contact"}>Contact</Link>
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default Navbar;