import React from "react";
import close from "../../../assets/img/close-sceen.png";
import "./SearchCity.scss";
function SearchCity({
    sortedCity,
    searchSity,
    setSearchSity,
    listSity,
    setCity,
}) {
    return (
        <div
            className={
                searchSity
                    ? "search_city_container"
                    : "search_city_container search_city_content_active"
            }
        >
            <div className='search_city_content'>
                <div className='search_city_content_wrapp'>
                    <div></div>
                    <img
                        onClick={() => {
                            setSearchSity(true);
                        }}
                        className='search_city_content_close'
                        src={close}
                        alt=''
                    />
                </div>
                <div className='search_city_content_title'>Выберите город</div>
                <div className='search_city_content_search_panel'>
                    <input
                        onInput={(e) => {
                            sortedCity(e);
                        }}
                        className='search_city_content_input'
                        type='text'
                        placeholder='Введите название города'
                    />
                    <button className='search_city_content_btn icon-Vector-search'></button>
                </div>
                <div className='search_city_content_example'>
                    <span className='search_city_content_example_text'>
                        Например:
                    </span>
                    <span className='search_city_content_example_variant'>
                        Москва Саратов
                    </span>
                </div>
            </div>
            <div className='search_city_content-2'>
                <div className='search_city_content-2_big_cities'>
                    <ul className=''>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Москва</a>
                        </li>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Санкт-Петербург</a>
                        </li>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Краснодар</a>
                        </li>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Казань</a>
                        </li>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Нижний Новгород</a>
                        </li>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Екатеринбург</a>
                        </li>
                        <li
                            className='search_city_content_choice_sity'
                            onClick={(e) => {
                                e.preventDefault();
                                setCity(e.target.textContent);
                            }}
                        >
                            <a href=''>Челябинск</a>
                        </li>
                    </ul>
                </div>
                <ul>
                    {Object.values(listSity).map((i) => {
                        return (
                            <li
                                className='search_city_content_choice_sity'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCity(i);
                                }}
                            >
                                <a href=''>{i}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SearchCity;
