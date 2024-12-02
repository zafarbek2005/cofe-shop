import React from 'react';
import image1 from "../../assets/Ellipse 1.png"
import image2 from "../../assets/Ellipse 2.png"
import image3 from "../../assets/Ellipse 3.png"
import image4 from "../../assets/Ellipse 4.png"

function AllCoffees(props) {
    const dataOfCoffees = [
        {
            image: image1,
            title: "sumatra mandhandling",
            price: "$18.50 – $87.50 10%",
            ingredients: "Milk Chocolate, Blueberry, Brown Sugar"
        }
    ]

    return (
        <div className={"allCoffees w-full h-[100vh] p-[7%] font-poppins"}>
           <div className={"w-full text-center"}>
               <h1 className={"uppercase text-[#6F3D28] font-[700] text-[40px]"}>all coffees</h1>
           </div>

        </div>
    );
}

export default AllCoffees;