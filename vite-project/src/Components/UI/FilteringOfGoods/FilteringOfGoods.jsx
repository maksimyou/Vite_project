import React from "react";
import "./FilteringOfGoods.scss";
import close from "../../../assets/img/close-sceen.png";
import FilteringOfGoodsItem1 from "./FilteringOfGoodsItem1/FilteringOfGoodsItem1";
import FilteringOfGoodsItem2 from "./FilteringOfGoodsItem2/FilteringOfGoodsItem2";
import FilteringOfGoodsItem3 from "./FilteringOfGoodsItem3/FilteringOfGoodsItem3";
import FilteringOfGoodsItem4 from "./FilteringOfGoodsItem4/FilteringOfGoodsItem4";
import FilteringOfGoodsItem5 from "./FilteringOfGoodsItem5/FilteringOfGoodsItem5";

function FilteringOfGoods({ setShowFilter, showFilter }) {
    return (
        <div
            className={
                showFilter
                    ? "filtering_of_goods_container"
                    : "filtering_of_goods_container filtering_of_goods_container_active"
            }
        >
            <div className='filtering_of_goods_content'>
                <div
                    onClick={() => {
                        setShowFilter(true);
                    }}
                    className='filtering_of_goods_content_back_close'
                >
                    <span className=''>Назад</span>
                    <img
                        onClick={() => {
                            setShowFilter(true);
                        }}
                        src={close}
                        alt=''
                    />
                </div>

                <div className='filtering_of_goods_content_filter'>Фильтр</div>
                <FilteringOfGoodsItem1 />
                <FilteringOfGoodsItem2 />
                <FilteringOfGoodsItem3 />
                <FilteringOfGoodsItem4 />
                <FilteringOfGoodsItem5 />
            </div>
        </div>
    );
}

export default FilteringOfGoods;
