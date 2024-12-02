import React from 'react';

function OpeningHours(props) {

    const openingHoursData = [
        {
            day: "Mon-Thu",
            time: "08:00-18:00"
        },
        {
            day: "Sun",
            time: "9:00-18:00"
        },
        {
            day: "Fri",
            time: "08:00-19:00"
        },
        {
            day: "Sat",
            time: "9:00-18:00"
        }
    ]

    return (
        <div>
            <div
                className={"openingHours w-full h-[60vh] sm:py-[10%] lg:py-0 px-[10%] flex flex-wrap items-center justify-between font-irishGrover text-white"}>
                <div className={"sm:w-full lg:w-[50%]"}>
                    <span
                        className={"w-full font-[400] text-[29px] sm:text-[36px] md:text-[43px] lg:text-[50px] xl:text-[58px] bg-[#221B1899] px-7 py-5 rounded-xl"}>
                        Opening Hours
                    </span>
                </div>
                <div className={"sm:w-full lg:w-[50%] flex flex-wrap justify-end gap-[5%] mt-7"}>
                    {
                        openingHoursData.map((item, index) => (
                            <div
                                className={"w-[45%] mt-5 text-[16px] sm:text-[19px] md:text-[22px] lg:text-[26px] xl:text-[29px] font-[400]"}
                                key={index}>
                                <h3> {item.day} </h3>
                                <h2> {item.time} </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default OpeningHours;
