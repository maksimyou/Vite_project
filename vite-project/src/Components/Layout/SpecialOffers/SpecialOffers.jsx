import React from "react";
import "./SpecialOffers.scss";
import ButtonWhite from "../../UI/ButtonWhite/ButtonWhite";
import SpeciesOffers1 from "../../SpeciesOffers/SpeciesOffers1";
import SpeciesOffers2 from "../../SpeciesOffers/SpeciesOffers2";
import SpeciesOffers3 from "../../SpeciesOffers/SpeciesOffers3";

function SpecialOffers() {
    return (
        <div className='special-offers_container'>
            <div className='special-offers_content'>
                <div className='special-offers_content_title'>
                    Идеи и подборки
                </div>

                <div className='special-offers_content_banners'>
                    <SpeciesOffers1 />
                    <SpeciesOffers2 />
                    <SpeciesOffers3 />
                </div>

                <div className='button_wrapper_special_offer'>
                    <ButtonWhite
                        adress={"ideas-and-collections/"}
                        text={"Полная подборка"}
                    />
                </div>
            </div>
        </div>
    );
}

export default SpecialOffers;
