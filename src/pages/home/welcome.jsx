import React from 'react';
import { Button } from "antd";

function Welcome(props) {
    return (
        <div>
            <div className={"welcome w-full h-[100vh] flex items-center justify-end px-[10%]"}>
                <div className={"sm:w-full md:w-[80%] lg:w-[60%] xl:w-[50%] text-end"}>
                    <h1 className={
                        "font-[700] text-[#471E22] sm:text-[27px] lg:text-[31px]"
                    }>
                        Welcome to Bartons incredibly
                    </h1>
                    <p className={
                        "text-[#533B2F] sm:text-[15px] lg:text-[16px] my-5"
                    }>
                        Your best local coffee. In addition to delicious sandwiches and cakes and hot dish of the day,
                    </p>
                    <Button className={
                        "font-bold bg-[#B77E66] text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-11 lg:py-6 text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] mt-5"
                    } type={"dark"}>
                        VIEW MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
