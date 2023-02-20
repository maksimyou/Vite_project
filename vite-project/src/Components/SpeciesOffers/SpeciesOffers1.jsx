import React from "react";
import ideas2 from "../../assets/img/ideas-2.png";
import ideas3 from "../../assets/img/ideas-3.png";
import "./SpeciesOffers1.scss";
function SpeciesOffers1() {
    return (
        <div className='special-offers_banner_item1'>
            <div class='special-offers_item1__block_text'>
                <div className='special-offers_item1__block_text_title'>
                    Лучшие тренажеры
                    <br /> для <span>жиросжигания</span>
                </div>
                <div className='special-offers_item1__block_text_subtitle_logo'>
                    <img src={ideas2} className='block_text_item1_logo' />
                    <div className='block_text_item1_subtitle'>
                        Тренировка
                        <br /> всего<span>14 минут</span>
                    </div>
                </div>
                <img
                    src={ideas3}
                    className='special-offers_item1__block_text_logo2'
                />
            </div>
        </div>
    );
}

export default SpeciesOffers1;
