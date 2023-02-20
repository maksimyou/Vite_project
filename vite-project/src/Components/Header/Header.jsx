import React, { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Cards from "./Cards/Cards";
import CatalogMenu from "../Catalog/CatalogMenu/CatalogMenu";
import TellChoise from "../UI/TellChoise/TellChoise";
import "./Header.scss";

//import { Resizable } from 'react-resizable';

function Header({
    setComparison,
    setLike,
    city,
    showCactalog,
    setShowCactalog,
    setCallShow,
    setSearchShow,
    setShowBurgerMenu,
    likeLength,
    setShowFavorites,
    showFavorites,
    like,
    basket,
    basketLength,
    comparison,
    setShowComparison,
    showComparison,
    comparisonLength,
    size,
    setSize,
    setSearchSity,
}) {
    let { pathname } = useLocation();
    let [tellShow, setTellShow] = useState(false);
    let [tell, setTell] = useState("+7 (800) 000-00-00");
    console.log(typeof size, size);

    return (
        <div className='header_container'>
            <div className='header_container_content-1'>
                <div className='header_content-1'>
                    <div className='header_content-1_menu_city_field'>
                        <div className='header_content-1_menu_field'>
                            <Link to='/' className='content-1_menu_field_logo'>
                                <img src={logo} alt='' />
                            </Link>
                        </div>
                        <div
                            onClick={() => {
                                setSearchSity(false);
                            }}
                            className='content-1_menu_field_city'
                        >
                            <span className='content-1_text_city'>{city}</span>
                            <span className='icon-Polygon-1 content-1_menu_icon'></span>
                        </div>
                    </div>
                    <div className='content-1_dealer_part'>
                        <div className='content-1_text_dealer'>Для дилеров</div>
                        <button className='content-1_button_part'>
                            <span>Become a Partner </span>
                        </button>
                    </div>
                    <div className='content-1_tel_time_сall'>
                        <div
                            onClick={() => {
                                setTellShow(!tellShow);
                            }}
                            className='content-1_tel_time_icon'
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className='content-1_tel'
                                href={tell}
                            >
                                {tell}
                            </a>
                            <div className='wrap_content-1_call_icon'>
                                <span className='content-1_time  '>МСК</span>
                                <span className='icon-Polygon-1 icon-content-1_time'></span>
                            </div>
                            {tellShow ? (
                                <TellChoise
                                    setTell={setTell}
                                    setTellShow={setTellShow}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            onClick={() => {
                                setCallShow(true);
                            }}
                            className='content-1_сall'
                        >
                            Заказать звонок
                        </div>
                    </div>
                    <div className='content-1_authorization_icon'>
                        <a className='content-1_authorization'>Войти</a>
                        <div className='icon-Group content-1_icon'></div>
                    </div>
                    {size <= 1150 ? (
                        <div
                            className='header_content-2_menu_search icon-Vector-search'
                            onClick={() => setSearchShow(true)}
                        ></div>
                    ) : (
                        ""
                    )}
                    {size <= 1150 ? (
                        <Cards
                            setComparison={setComparison}
                            setLike={setLike}
                            basket={basket}
                            comparison={comparison}
                            like={like}
                            showFavorites={showFavorites}
                            showComparison={showComparison}
                            setShowComparison={setShowComparison}
                            setShowFavorites={setShowFavorites}
                            comparisonLength={comparisonLength}
                            basketLength={basketLength}
                            likeLength={likeLength}
                            width={size}
                        />
                    ) : (
                        ""
                    )}
                    {size <= 1150 ? (
                        <div
                            className='content-1_burger_menu_button'
                            onClick={() => setShowBurgerMenu(true)}
                        >
                            <span></span>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            <div className='header_container_content-2'>
                <div className='header_content-2'>
                    <div className='header_content-2_menu_field'>
                        <div
                            className='wrappp_catalog_header'
                            onMouseEnter={() => setShowCactalog(true)}
                            onMouseLeave={() => setShowCactalog(false)}
                        >
                            <div className='header_content-2_button'>
                                <span className='header_content-2_icon_menu icon-6'></span>
                                <span className='header_content-2_text_menu'>
                                    Каталог
                                </span>
                            </div>
                        </div>
                        <div className='wrapp_wrapp_search'>
                            {size >= 1150 ? (
                                <div className='header_content-2_menu_search_wrap'>
                                    {/*<input className="header_content-2_menu_search_input" type="search" name="" id="">*/}
                                    <div
                                        className='header_content-2_menu_search icon-Vector-search'
                                        onClick={() => setSearchShow(true)}
                                    ></div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <nav className='header_content-2_menu_list_wrap'>
                            <ul className='header_content-2_menu_list'>
                                <li className='header_content-2_link'>
                                    <a href=''>Бренды</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>Сервис</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>Услуги</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>Поддержка</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>О компании</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>Блог</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>Где купить</a>
                                </li>
                                <li className='header_content-2_link'>
                                    <a href=''>Контакты</a>
                                </li>
                            </ul>
                        </nav>

                        {size >= 1150 ? (
                            <Cards
                                setComparison={setComparison}
                                setLike={setLike}
                                basket={basket}
                                comparison={comparison}
                                setShowComparison={setShowComparison}
                                comparisonLength={comparisonLength}
                                showComparison={showComparison}
                                like={like}
                                showFavorites={showFavorites}
                                setShowFavorites={setShowFavorites}
                                basketLength={basketLength}
                                likeLength={likeLength}
                                width={size}
                            />
                        ) : (
                            ""
                        )}
                        {showCactalog ? (
                            <CatalogMenu setShowCactalog={setShowCactalog} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
            <div className='header_container_content-3'>
                <div className='header_content-3'>
                    <div className='content-3_menu_filter'>
                        <Link
                            to='/home'
                            className={
                                pathname == "/home"
                                    ? "header_content_for-home content_for-home_active"
                                    : "header_content_for-home"
                            }
                        >
                            <span className='for-home_title'>Для дома</span>
                            <span className='icon-Polygon-1 for-home_icon '></span>
                        </Link>
                        <Link
                            to='/fitness'
                            className={
                                pathname == "/fitness"
                                    ? "header_content_for-fitness-club content_for-home_active"
                                    : "header_content_for-fitness-club"
                            }
                        >
                            <span className='for-fitness-club_title'>
                                Для фитнес клуба
                            </span>
                            <span className='icon-Polygon-1 for-fitness-club_icon'></span>
                        </Link>
                    </div>
                    {/*<div className="content-3_menu_empty_block"></div>*/}
                </div>
            </div>
        </div>
    );
}

export default Header;
