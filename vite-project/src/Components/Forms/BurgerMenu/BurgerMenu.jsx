import React from "react";
import "./BurgerMenu.scss";
import close from "../../../assets/img/close-sceen.png";
import MenuHome from "./MenuHome/MenuHome";
import MenuFitness from "./MenuFitness/MenuFitness";
import { useState } from "react";
function BurgerMenu({ setCallShow, showBurgerMenu, setShowBurgerMenu }) {
    let [showBorgerHome, setShowBorgerHome] = useState(false);
    let [showBorgerFitness, setShowBorgerFitness] = useState(false);

    return (
        <div
            className={
                showBurgerMenu
                    ? "burger-menu_container burger-menu_active"
                    : "burger-menu_container"
            }
        >
            <div className='burger-menu_content'>
                <div className='burger-menu_content_items'>
                    <div className='burger-menu_item-sity-icon'>
                        <div className='burger-menu_item_field_city'>
                            <span className='burger-menu_item_text_city'>
                                Москва
                            </span>
                            <span className='icon-Polygon-1 content-1_menu_icon'></span>
                        </div>
                        <div className='burger-menu_item_authorization_icon'>
                            <a className='burger-menu_item_authorization'>
                                Войти
                            </a>
                            <div className='icon-Group content-1_icon '></div>
                        </div>
                    </div>
                    <img
                        className='burger-menu_item_close'
                        onClick={() => setShowBurgerMenu(false)}
                        src={close}
                        alt=''
                    />
                </div>
                <div className='burger-menu_content_wrap'>
                    <button className='burger-menu_content_wrap_button'>
                        <span className='icon-Vector-search isocn_search_style'></span>
                    </button>
                    <input
                        className='burger-menu_content_input'
                        placeholder='Введите текст для поиска'
                        type='search'
                    />
                </div>
                <div className='burger-menu_content_catalog_group'>
                    <div className='catalog_group_title'>Каталог</div>
                    <div
                        className='catalog_group_for-home'
                        onClick={() => setShowBorgerHome(true)}
                    >
                        <span className='text_for-home'>Для дома</span>
                        <span className='icon-arrow-right-33 burer_arrow_icon'></span>
                    </div>
                    <div
                        className='catalog_group_for_fitness'
                        onClick={() => setShowBorgerFitness(true)}
                    >
                        <span className='text_for_fitness'>
                            Для фитнес клубов
                        </span>
                        <span className='icon-arrow-right-33 burer_arrow_icon'></span>
                    </div>
                </div>
                <nav className='burger-menu_content_nav'>
                    <ul className='burger-menu_content_lists'>
                        <li className='burger-menu_links'>
                            <a href=''>Бренды</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>Сервис</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>Услуги</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>Поддержка</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>О компании</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>Блог</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>Выставочный зал</a>
                        </li>
                        <li className='burger-menu_links'>
                            <a href=''>Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className='burger-menu_content_tel_time_сall'>
                    <div className='content-burger_tel_time_icon'>
                        <a
                            className='content-burger_tel'
                            href='tel:+7(800)000-00-00'
                        >
                            +7(800) 000-00-00
                        </a>
                    </div>
                    <div
                        onClick={() => {
                            setCallShow(true);
                        }}
                        className='content-burger_сall'
                    >
                        Заказать звонок
                    </div>
                </div>
                <div className='burger-menu_content_partner'>
                    <div className='burger-menu_diller'>Для дилеров</div>
                    <div className='burger-menu_became-partner'>
                        Become a partner
                    </div>
                </div>
            </div>
            <MenuHome
                setCallShow={setCallShow}
                showBorgerHome={showBorgerHome}
                setShowBorgerHome={setShowBorgerHome}
                title={"Для дома"}
            />
            <MenuFitness
                setCallShow={setCallShow}
                showBorgerFitness={showBorgerFitness}
                setShowBorgerFitness={setShowBorgerFitness}
                title={"Для фитнес клубов"}
            />
        </div>
    );
}

export default BurgerMenu;
