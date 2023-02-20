import React from "react";
import "./FilteringOfGoodsItem3.scss";
function FilteringOfGoodsItem3() {
    return (
        <div className='filtering_of_goods_content_item-3'>
            <div className='filtering_of_goods_content_item-3_title'>
                Акции, наличие
            </div>
            <div className='filtering_of_goods_content_item-3_wrap_checkbox'>
                <label
                    className='filterinf_of_goods_content_item-3_lable'
                    htmlFor='3-1'
                >
                    <input type='checkbox' name='' id='3-1' />
                    <span>Акция</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-3_lable'
                    htmlFor='3-2'
                >
                    <input type='checkbox' name='' id='3-2' />
                    <span>Новинки</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-3_lable'
                    htmlFor='3-3'
                >
                    <input type='checkbox' name='' id='3-3' />
                    <span>В наличии</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-3_lable'
                    htmlFor='3-4'
                >
                    <input type='checkbox' name='' id='3-4' />
                    <span>Наш выбор</span>
                </label>
            </div>
        </div>
    );
}

export default FilteringOfGoodsItem3;
