import React from "react";
import "./FilteringOfGoodsItem2.scss";
function FilteringOfGoodsItem2() {
    return (
        <div className='filtering_of_goods_content_item-2'>
            <div className='filtering_of_goods_content_item-2_title'>
                Функциональность
            </div>
            <div className='filtering_of_goods_content_item-2_wrap_checkbox'>
                <label
                    className='filterinf_of_goods_content_item-2_lable'
                    htmlFor='2-1'
                >
                    <input type='checkbox' name='' id='2-1' />
                    <span>Самые продвинутые</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-2_lable'
                    htmlFor='2-2'
                >
                    <input type='checkbox' name='' id='2-2' />
                    <span>Компактные</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-2_lable'
                    htmlFor='2-3'
                >
                    <input type='checkbox' name='' id='2-3' />
                    <span>С моб. приложением</span>
                </label>
            </div>
        </div>
    );
}

export default FilteringOfGoodsItem2;
