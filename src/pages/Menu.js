import React from "react";
import HeadlineCards from "./HeadlineCards";
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "After order you won't be able to cancel!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes order now"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered",
                text: "Your order as been processed and will be deliver",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Weeek Specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className="cards">
                {
                    HeadlineCards.map(HeadlineCard => <div key={HeadlineCard.id} className="menu-items">
                        <img src={HeadlineCard.image} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{HeadlineCard.title}</h5>
                                <p>{HeadlineCard.price}</p>
                            </div>
                            <p>{HeadlineCard.description}</p>
                            <button className="orderBtn" onClick={() => handleOrder(HeadlineCard.id)}>Order Now</button>
                        </div>
                        </div>)
                }
            </div>

        </div>
    )
}

export default Menu;