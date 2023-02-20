import React from "react";
import { useEffect } from "react";
import "./CardsCatalog.scss";
function CardsCatalog({ image, link }) {
    function addColorItem(event) {
        event.target.nextSibling.style.color = "rgba(245, 59, 73, 0.4)";
    }
    function removeColorItem(event) {
        event.target.nextSibling.style.color = "";
    }
    useEffect(() => {
        addColorItem;
    }, []);

    return (
        <div className='home_category_item'>
            <div className='item_category_home_img'>
                <img src={image} alt='' />
            </div>
            <div className='home_category_item_info'>
                <div className='item_category_home_title'>Кардиотренажеры</div>
                <div className='item_category_home_list'>
                    <ul>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href={link}
                            >
                                Беговые дорожки
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href=''
                            >
                                Эллиптические тренажеры
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href=''
                            >
                                Велотренажеры
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href=''
                            >
                                Cтепперы
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href=''
                            >
                                Гребные тренажеры
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href=''
                            >
                                Сайклинг
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                        <li className='category_home_list_item'>
                            <a
                                onMouseOut={(e) => {
                                    removeColorItem(e);
                                }}
                                onMouseEnter={(e) => addColorItem(e)}
                                href=''
                            >
                                Горнолыжные тренажеры
                            </a>
                            <span className='category_home_list_count'>54</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsCatalog;
