import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoMdStar } from "react-icons/io";
import image1 from "../../assets/Ellipse 39.png";
import image2 from "../../assets/Ellipse 38.png";
import image3 from "../../assets/Ellipse 39.png";
import image4 from "../../assets/Ellipse 38.png";

function Customers(props) {
    const cardData = [
        {
            image: image1,
            title: "As good as advertised",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
            name: "Mrs Catherine White",
            time: "44 Hours Ago"
        },
        {
            image: image2,
            title: "Exceeded Expectations",
            description: `Suspendisse potenti. Quisque at lectus purus. Etiam `,
            name: "Mr John Doe",
            time: "3 Days Ago"
        },
        {
            image: image3,
            title: "Amazing Experience",
            description: `Proin nec dui massa. Integer interdum lorem in arcu`,
            name: "Miss Laura Green",
            time: "2 Weeks Ago"
        },
        {
            image: image4,
            title: "Highly Recommend",
            description: `Aenean quis tincidunt odio. Nulla facilisi. Phasellus`,
            name: "Mr Mark Johnson",
            time: "1 Month Ago"
        }
    ];

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

    return (
        <div className="customers w-full h-[110vh] flex flex-wrap justify-center items-center px-[10%] py-[5%] text-white font-lexend">
            <h1 className={"w-full text-center text-white font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px]"}>
                What our Customers
            </h1>
            <Carousel
                className={"w-full"}
                showThumbs={false}
                showStatus={false}
                showArrows={false} // Bu yerda prev/next ikonlarini olib tashladik
                infiniteLoop
                useKeyboardArrows
                autoPlay
                centerMode={true}
                centerSlidePercentage={slidePercentage}
                interval={3000}
                transitionTime={700}
                swipeable={true}
                emulateTouch={true}
                renderIndicator={(onClickHandler, isSelected, index) => {
                    const style = isSelected ? { opacity: 1 } : { opacity: 0.5 };
                    return (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className="inline-block mx-1 text-[22px]"
                            style={style}
                        >
                            ●
                        </button>
                    );
                }}
            >
                {cardData.map((item, index) => (
                    <div className={"relative pt-[40px]"} key={index}>
                        <div className="rounded-lg px-5 py-[15%] bg-[#58311591] mx-auto" style={{ width: '300px' }}>
                            <img src={item.image} alt={item.title} className={"absolute top-0 left-[130px]"} style={{ width: "80px", height: "80px" }} />
                            <span className={"flex justify-center gap-5"}>
                                <IoMdStar className={"text-[#FCFF5C]"} />
                                <IoMdStar className={"text-[#FCFF5C]"} />
                                <IoMdStar className={"text-[#FCFF5C]"} />
                                <IoMdStar className={"text-[#FCFF5C]"} />
                                <IoMdStar className={"text-white"} />
                            </span>
                            <h2 className={"font-[700] text-[28px]"}>{item.title}</h2>
                            <q className={"font-[400] text-[#D3CECE]"}>{item.description}</q>
                            <p className={"font-[700] text-[#54DD8B] text-[15px] mt-5"}>{item.name}</p>
                            <p className={"font-[700] text-[15px]"}>{item.time}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Customers;
