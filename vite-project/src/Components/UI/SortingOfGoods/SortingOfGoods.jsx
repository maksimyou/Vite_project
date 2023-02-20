import React from "react";
import "./SortingOfGoods.scss";
function SortingOfGoods({ setShowFilter }) {
    return (
        <div className='sorting_of_goods_container'>
            <div className='sorting_of_goods_content'>
                <div className='sorting_of_goods_content_filter_and_category'>
                    <div
                        onClick={() => {
                            setShowFilter(false);
                        }}
                        className='sorting_of_goods_content_filter'
                    >
                        <span className=''></span> Фильтр
                    </div>
                    <div className='sorting_of_goods_content_category'>
                        <span className='icon-sort_icon '></span> По
                        популярности
                    </div>
                </div>
                <div className='sorting_of_goods_content_banners_tag'>
                    <button className='sorting_of_goods_banners_tag_name active_sorting_of_goods_banners_tag_name'>
                        <span>Беговые дорожки</span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span>Эллиптические</span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span>Велотренажеры</span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span> Cтепперы</span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span>Горнолыжные </span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span> Гребные тренажеры</span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span> Гребные тренажеры</span>
                    </button>
                    <button className='sorting_of_goods_banners_tag_name'>
                        <span> Гребные тренажеры</span>
                    </button>
                </div>
                <div className='sorting_of_goods_content_sorting_method'>
                    <div className='sorting_of_goods_content_sorting_method_name active_sorting_method_name'>
                        <span className='icon-sort_icon sort_icon'></span>
                        По популярности
                    </div>
                    <div className='sorting_of_goods_content_sorting_method_name'>
                        По новизне
                    </div>
                    <div className='sorting_of_goods_content_sorting_method_name'>
                        По цене
                    </div>
                    <div className='sorting_of_goods_content_sorting_method_name'>
                        По рейтингу
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SortingOfGoods;
