import React from "react";
import "./FilteringOfGoodsItem5.scss";

import ButtonSend from "../../../UI/ButtonSend/ButtonSend";

function FilteringOfGoodsItem5() {
    return (
        <div className='filtering_of_goods_content_item-5'>
            <div className='filtering_of_goods_content_button'>
                <ButtonSend text={"Очистить"} />
            </div>
            <div className='filtering_of_goods_content_item-5_help_read_more'>
                <div className='filtering_of_goods_content_item-5_text-1'>
                    Экспертная помощь в подборе
                </div>

                <div className='filtering_of_goods_content_item-5_text-2'>
                    Подробнее
                </div>
            </div>
        </div>
    );
}

export default FilteringOfGoodsItem5;
