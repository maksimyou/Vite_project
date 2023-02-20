import React from "react";
import "./SearchPanel.scss";
import close from "../../../assets/img/close-sceen.png";
function SearchPanel({ searchShow, setSearchShow }) {
    return (
        <div
            className={
                searchShow
                    ? "search_container active-search"
                    : "search_container"
            }
        >
            <div className='search_content_field'>
                <div className='search_content_wrap'>
                    <button className='search_content_wrap_button'>
                        <span className='icon-Vector-search isocn_search_style'></span>
                    </button>
                    <input
                        className='search_content_input'
                        placeholder='Введите текст для поиска'
                        type='search'
                    />
                    <img
                        className='earch_content_close'
                        src={close}
                        alt=''
                        onClick={() => setSearchShow(false)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchPanel;
