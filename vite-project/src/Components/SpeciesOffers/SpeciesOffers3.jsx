import React from "react";
import "./SpeciesOffers3.scss";
import ideas6 from "../../assets/img/ideas-6.png";
function SpeciesOffers3() {
    return (
        <div className='special-offers_banner_item3'>
            <div className='special-offers_item3__block_text'>
                <div className='special-offers_item3__block_text_title'>
                    Беговая дорожка
                </div>
                <div className='special-offers_item3__block_text_subtitle'>
                    для подготовки <br />
                    к марафону
                </div>
                <img className='block_text_item3_logo' src={ideas6} alt='' />
            </div>
        </div>
    );
}

export default SpeciesOffers3;
