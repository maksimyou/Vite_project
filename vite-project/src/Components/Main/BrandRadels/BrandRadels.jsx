import React from "react";
import "./BrandRadels.scss";
import { categoryBrand } from "../../../assets/data/data";
import { useState } from "react";
import Button from "../../UI/Button/Button";
function BrandRadels() {
    let [brends, setBrands] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    return (
        <div className='brand-radels_container'>
            <div className='brand-radels_content'>
                <div className='brand-radels_container_title'>
                    Популярные бренды
                </div>
                <div className='brand-radels_container_lists'>
                    {categoryBrand.map((elem) => {
                        return (
                            <span className='brand-radels_container_item'>
                                {elem}
                            </span>
                        );
                    })}
                </div>
                <div className='brand-radels_content_brand-logo'>
                    {brends.map((elem) => {
                        return (
                            <div className='brand-radels_container_item-logo'>
                                <img
                                    src={`../../../../public/img/logo-${elem}.png`}
                                    alt=''
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='button_wrapper_product'>
                    <Button text={"Все бренды"} />
                </div>
            </div>
        </div>
    );
}

export default BrandRadels;
