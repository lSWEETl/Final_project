import React from "react";
import Bruchetta from "../images/Bruchetta.png"
import GreekSalad from "../images/GreekSalad.jpg"
import LemonDessert from "../images/LemonDessert.jpg"



const HeadlineCards = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      image: GreekSalad,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: "$5.99",
      image: Bruchetta,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      image: LemonDessert,
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

export default HeadlineCards;