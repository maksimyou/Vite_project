import React from "react";
import "./CategoryMenu.scss";
function CategoryMenu({ text }) {
    return (
        <div className='catalog2_group_for-home'>
            <span className='text2_for-home'>{text}</span>
            <span className='icon-arrow-right-33 burer_arrow_icon2'></span>
        </div>
    );
}

export default CategoryMenu;
