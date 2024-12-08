import React, { useState } from "react";
import "../TabMenu/Tab.css";
import Menu from "./Menu"; 

const Galleryreact = () => {
    const [items, setItems] = useState(Menu);

    // Filter function for categories
    const filterItem = (categItem) => {
        if (categItem === "All") {
            setItems(Menu); // Show all items if "All" is clicked
        } else {
            const updatedItems = Menu.filter((curElem) => {
                return curElem.category === categItem; // Use === for comparison
            });
            setItems(updatedItems);
        }
    };

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItem('breakfast')}> Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}> Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}> Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}> Dinner</button>
                    <button className="btn btn-warning" onClick={() => filterItem('All')}> All</button>
                </div>
            </div>

            {/* Main items section */}
            <div className="menu-item container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                            <div className="row Item-inside">
                                                {/* Image Section */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt={name} className="img-fluid" />
                                                </div>
                                                {/* Menu description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description}</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between">
                                                            <h2>Price: {price}</h2>
                                                            <a href="#">
                                                                <button className="btn btn-primary"> Order Now</button>
                                                            </a>
                                                        </div>
                                                        <p>*Prices may vary on selected date</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Galleryreact;
