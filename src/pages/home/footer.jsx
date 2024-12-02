import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/image 1.png";

function Footer(props) {
    return (
        <div>
            <div className={"footerPage w-full h-[100vh] px-[15%] py-[10%] flex flex-wrap font-poppins font-[400] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white"}>
                <div className={"sm:w-full lg:w-[33%] flex flex-col gap-5 uppercase"}>
                    <Link to={"/"}>home</Link>
                    <Link to={"/"}>about</Link>
                    <Link to={"/"}>menu</Link>
                    <Link to={"/"}>products</Link>
                    <Link to={"/"}>news</Link>
                    <Link to={"/"}>locations</Link>
                </div>
                <div className={"sm:w-full lg:w-[33%] flex flex-col gap-5 mt-5"}>
                    <h3>CONTACT</h3>
                    <h3>25 Dockhead, London SE1 2BS</h3>
                    <h3 className={"underline"}>tel:020 7131 3535</h3>
                </div>
                <div className={"sm:w-full lg:w-[33%] flex flex-col gap-5 sm:items-start lg:items-end mt-5"}>
                    <img src={logo} alt="logo" className={"w-[150px] sm:w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px]"} />
                </div>
                <div className={"w-full text-center sm:mt-5 lg:mt-[10%]"}>
                    <h3 className={"text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]"}>© 2023 Bartonsuk Limited. All Rights Reserved.</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
