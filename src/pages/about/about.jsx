import React from 'react';
import AllCoffees from "./allCoffees";

function About(props) {
    return (
        <div>
            <div className={"aboutPage w-full h-[110vh] text-white font-poppins px-[10%] flex items-center justify-start"}>
                <h1 className={"font-[600] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px]"}>
                    Select your <br/> coffee
                </h1>
            </div>
            <AllCoffees/>
        </div>
    );
}

export default About;