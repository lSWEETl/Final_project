import React from "react";
import Bruchetta from "../images/Bruchetta.png"
import GreekSalad from "../images/GreekSalad.jpg"
import LemonDessert from "../images/LemonDessert.jpg"



const HeadlineCards = () => {
  const menuItem = [
    {
      text: "Greek Salad",
      price: "$12.99",
      subtitle: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      image: GreekSalad,
    },
    {
      text: "Bruchetta",
      price: "$5.99",
      subtitle: "subtitle",
      image: Bruchetta,
    },
    {
      text: "Lemon Dessert",
      price: "$5.00",
      subtitle: "subtitle",
      image: LemonDessert,
    },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, color: "#2f4f4f" }}>
      {/* Card */}

      {menuItem.map(({ text, price, subtitle, image }, index) => {
        return (
          <div key={index} className="rounded-xl relative">
            {/* Overlay */}
            <img
              className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
              src={image}
              alt="/"
              style={{width: 200,
                height: 200,
                borderRadius: '2rem',}}
            />
            <div className="absolute for w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">{text} {price} </p>
              <p className="px-2">{subtitle}</p>
              <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4">
                order
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadlineCards;