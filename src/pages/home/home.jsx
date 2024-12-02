import React from 'react';
import { Button } from "antd";
import Welcome from "./welcome";
import OpeningHours from "./openingHours";
import OurMenu from "./ourMenu";
import Customers from "./customers";
import Map from "./map";
import Footer from "./footer";

function Home(props) {
    return (
        <div>
            <div
                className={"homePage w-full h-[100vh] flex items-center justify-start px-[7%] font-poppins text-white"}>
                <div className={"sm:w-full md:w-[80%] lg:w-[65%] xl:w-[50%]"}>
                    <h1 className={
                        "font-[700] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]"
                    }>
                        FRESH COFFEE IN THE MORNING
                    </h1>
                    <p className={
                        "text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px]"
                    }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Button className={
                        "font-bold bg-[#B77E66] text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-11 lg:py-6 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] mt-5"
                    } type={"dark"}>
                        ORDER NOW
                    </Button>
                </div>
            </div>
            {/*  Other components  */}
            <Welcome/>
            <OpeningHours/>
            <OurMenu/>
            <Customers/>
            <Map/>
            <Footer/>

        </div>
    );
}

export default Home;
