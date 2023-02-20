import React from "react";
import { Link } from "react-router-dom";
import "./CatalogMenu.scss";
import CategoryMenu from "../../UI/CategoryMenu/CategoryMenu";
import GoodsMenu from "../../UI/GoodsMenu/GoodsMenu";
import { useState } from "react";
function CatalogMenu({ setShowCactalog }) {
    let [switchCategory, setSwitchCategory] = useState(true);
    return (
        <div className='catalog-menu_wrap'>
            <div
                className='catalog-menu_container'
                onMouseLeave={() => setShowCactalog(false)}
                onMouseEnter={() => setShowCactalog(true)}
            >
                <div className='catalog-menu_content'>
                    <div className='catalog-menu_content__header'>
                        <Link
                            onClick={() => {
                                setSwitchCategory(true);
                            }}
                            to={"./#"}
                            className={
                                switchCategory
                                    ? "catalog-menu_content__header_for-home selected_header section-menu section-menu-active"
                                    : "catalog-menu_content__header_for-home selected_header section-menu"
                            }
                        >
                            Для дома
                        </Link>
                        <Link
                            onClick={() => {
                                setSwitchCategory(false);
                            }}
                            to={"./#"}
                            className={
                                switchCategory
                                    ? "catalog-menu_content__header_for-fitness section-menu"
                                    : "catalog-menu_content__header_for-fitness section-menu section-menu-active"
                            }
                        >
                            Для фитнес клубов
                        </Link>
                    </div>
                    {switchCategory ? (
                        <div className='catalog-menu_content__main'>
                            <div className='catalog-menu_content__main_sidebar_categories'>
                                <CategoryMenu text={"Кардиотренажеры"} />
                                <CategoryMenu text={"Силовые тренажеры"} />
                                <CategoryMenu text={"Уличные виды спорта"} />
                                <CategoryMenu text={"Свободные веса"} />
                                <CategoryMenu text={"Игровые столы"} />
                                <CategoryMenu text={"Массажное оборудование"} />
                                <CategoryMenu text={"Фитнес аксессуары"} />
                                <CategoryMenu text={"Функциональный тренинг"} />
                            </div>
                            <div className='catalog-menu_content__main_goods'>
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                            </div>
                        </div>
                    ) : (
                        <div className='catalog-menu_content__main'>
                            <div className='catalog-menu_content__main_sidebar_categories'>
                                <CategoryMenu text={"Кардиотренажеры"} />
                                <CategoryMenu text={"Силовые тренажеры"} />
                                <CategoryMenu text={"Функциональный тренинг"} />
                                <CategoryMenu text={"Свободные веса"} />
                                <CategoryMenu text={"Аэробика"} />
                                <CategoryMenu text={"Wellness, СПА, массаж"} />
                                <CategoryMenu
                                    text={"Реабилитация и спортивная медицина"}
                                />
                                <CategoryMenu
                                    text={"Оборудование для бассейнов"}
                                />
                                <CategoryMenu text={" Средства гигиены"} />
                            </div>
                            <div className='catalog-menu_content__main_goods'>
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                                <GoodsMenu text={"Беговые дорожки"} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CatalogMenu;
