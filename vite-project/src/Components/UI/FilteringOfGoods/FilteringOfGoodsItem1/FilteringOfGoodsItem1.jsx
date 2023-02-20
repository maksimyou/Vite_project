import React from "react";
import "./FilteringOfGoodsItem1.scss";
function FilteringOfGoodsItem1() {
    return (
        <div className='filtering_of_goods_content_item-1'>
            <div className='filtering_of_goods_content_item-1_title'>
                Производители
            </div>
            <div className='filtering_of_goods_content_item-1_wrap_checkbox'>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-1'
                >
                    <input type='checkbox' name='' id='1-1' />
                    <span>Gym80</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-2'
                >
                    <input type='checkbox' name='' id='1-2' />
                    <span>CardioPower</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-3'
                >
                    <input type='checkbox' name='' id='1-3' />
                    <span>Original Fitness</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-4'
                >
                    <input type='checkbox' name='' id='1-4' />
                    <span>Nautilus</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-5'
                >
                    <input type='checkbox' name='' id='1-5' />
                    <span>Sole Fitness</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-6'
                >
                    <input type='checkbox' name='' id='1-6' />
                    <span>True Fitness</span>
                </label>
                <label
                    className='filterinf_of_goods_content_item-1_lable'
                    htmlFor='1-7'
                >
                    <input type='checkbox' name='' id='1-7' />
                    <span>Smith Strength</span>
                </label>
            </div>
        </div>
    );
}

export default FilteringOfGoodsItem1;
