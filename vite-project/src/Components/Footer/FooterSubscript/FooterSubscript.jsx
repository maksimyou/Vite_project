import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./FooterSubscript.scss";
import ButtonSubs from "../../UI/ButtonSubs/ButtonSubs";
import FooterPatner from "../FooterPatner/FooterPatner";
function FooterSubscript({ size, setSize }) {
    console.log(size.size);
    return (
        <div className='footer_subscript_container'>
            <div className='footer_subscript_content'>
                <ButtonSubs size={size} />
                {size < 1205 ? <FooterPatner /> : ""}
                <div className='footer_subscript_content_tells'>
                    <a
                        href='+7 (000) 000-00-00'
                        type='tel'
                        className='footer_subscript_content_tell-1'
                    >
                        +7 (000) 000-00-00 для Москвы
                    </a>
                    <a
                        href='8 (800) 000-00-00'
                        type='tel'
                        className='footer_subscript_content_tell-2'
                    >
                        8 (800) 000-00-00 для России
                    </a>
                    <a
                        href=''
                        className='footer_subscript_content_request_a_call'
                    >
                        Заказать звонок
                    </a>
                </div>
                <div className='footer_subscript_content_mail_write'>
                    <div className='footer_subscript_content_mail'>
                        wellfitness@wellfit.ru
                    </div>
                    <a href='' className='footer_subscript_content_write'>
                        Написать
                    </a>
                </div>

                {size > 1211 ? (
                    <div className='footer_subscript_content_the_policy_offer'>
                        <a
                            href='#'
                            className='footer_subscript_content_the_policy'
                        >
                            Политика конфиденциальности
                        </a>
                        <a
                            href='#'
                            className='footer_subscript_content_the_offer'
                        >
                            Публичная офферта
                        </a>
                    </div>
                ) : (
                    ""
                )}
                {size < 768 ? (
                    <div className='footer_subscript_content_the_policy_offer'>
                        <a
                            href='#'
                            className='footer_subscript_content_the_policy'
                        >
                            Политика конфиденциальности
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default FooterSubscript;
