import React from "react";
import "./FooterMenuItem.scss";
function FooterMenuItem({ title, subtitle }) {
    return (
        <div className='footer-menu-item_container'>
            <div className='footer-menu-item_content'>
                <div className='footer-menu-item_content_title'>{title}</div>
                <ul className='footer-menu-item__list'>
                    {subtitle.map((elem, index) => {
                        return (
                            <li key={index} className='footer-menu-item__links'>
                                <a href='#'>{elem}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default FooterMenuItem;
