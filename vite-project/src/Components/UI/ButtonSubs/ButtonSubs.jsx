import React from "react";
import "./ButtonSubs.scss";

function ButtonSubs({ size }) {
    return (
        <div className='footer_subscript_button'>
            <button className='footer_subscript__button-sub'>
                <span className='footer_subscript_text'>
                    Подписаться на рассылку
                </span>
                <span className='icon-paper-plane-2-1 footer_subscript_icon'></span>
            </button>
            {size < 1205 && size > 768 ? (
                <div className='footer_subscript_content_the_policy_offer'>
                    <a href='#' className='footer_subscript_content_the_policy'>
                        Политика конфиденциальности
                    </a>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default ButtonSubs;
