import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import image1 from "../../assets/Mask group.png";
import image2 from "../../assets/Mask group (1).png";
import image3 from "../../assets/unsplash_L-sm1B4L1Ns.png";
import image4 from "../../assets/Mask group (2).png";
import {Button} from "antd";

function OurMenu(props) {
    const cardData = [{
        image: image1,
        title: "Cappacino",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
        price: "$8.60"
    }, {
        image: image2,
        title: "Mocha",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
        price: "$9.20"
    }, {
        image: image3,
        title: "Latte",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
        price: "$11.40"
    }, {
        image: image4,
        title: "Cold Java",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
        price: "$6.40"
    },];

    const getSlidePercentage = () => {
        if (window.innerWidth < 800) {
            return 100;
        } else if (window.innerWidth < 1200) {
            return 50;
        } else {
            return 33.33;
        }
    };

    const [slidePercentage, setSlidePercentage] = React.useState(getSlidePercentage());

    React.useEffect(() => {
        const handleResize = () => setSlidePercentage(getSlidePercentage());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (<div
            className="ourMenu w-full h-[120vh] flex flex-wrap justify-center items-center px-[10%] py-[5%] text-white font-poppins">
            <div className={"w-full text-center"}>
                <h1 className={"capitalize text-[#903711] font-[400] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] xl:text-[50px]"}>our
                    menu</h1>
            </div>
            <div className={"w-full text-start pl-[5%] my-5"}>
                <h2 className={"text-[#9E5A3D] underline font-[600] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]"}>Coffee</h2>
            </div>
            <Carousel
                className={"w-full"}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                centerMode={true}
                centerSlidePercentage={slidePercentage}
                interval={3000}
                transitionTime={500}
                swipeable={true}
                emulateTouch={true}
                renderArrowPrev={(onClickHandler, hasPrev) => hasPrev && (<button
                        type="button"
                        onClick={onClickHandler}
                        className="absolute left-0 z-10 bg-[#FFFFFFB5] text-[#C08267] p-2 rounded-full ml-3"
                        style={{top: 'calc(50% - 15px)'}}
                    >
                        <FaChevronLeft/>
                    </button>)}
                renderArrowNext={(onClickHandler, hasNext) => hasNext && (<button
                        type="button"
                        onClick={onClickHandler}
                        className="absolute right-0 z-10 bg-[#FFFFFFB5] text-[#C08267] p-2 rounded-full mr-3"
                        style={{top: 'calc(50% - 15px)'}}
                    >
                        <FaChevronRight/>
                    </button>)}
            >
                {cardData.map((item, index) => (
                    <div key={index} className="text-start rounded-lg p-5 bg-[#734A39E0] mx-auto"
                         style={{width: '300px'}}>
                        <img src={item.image} alt={item.title} className={"w-full"}/>
                        <h2 className={"font-[700] text-[23px] my-3"}>{item.title}</h2>
                        <p className={"text-[#FFFADA] text-[12px] font-[300]"}> {item.description} </p>
                        <span className={"flex items-center justify-between mt-5"}>
                            <h2 className={"font-[700] text-[23px] my-3"}>{item.price}</h2>
                            <Button className={"bg-[#A0583C] text-white font-bold"} type={"dark"}>
                                Order Now
                            </Button>
                        </span>
                    </div>))}
            </Carousel>
        </div>);
}

export default OurMenu;
