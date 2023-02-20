import React from 'react'
import close from '../../../../assets/img/close-sceen.png'
import './MenuHome.scss'
function MenuHome({ setCallShow, title, showBorgerHome, setShowBorgerHome }) {
    return (
        //<div className='burger-home_container'>
        <div className={showBorgerHome ? "burger-home_content burger-home-active" : 'burger-home_content'
        }>
            <div className="burger-home_content_navigation">
                <div className="burger-home_content_back" onClick={() => setShowBorgerHome(false)}>Назад</div>
                <img className='burger-home_content_close' onClick={() => setShowBorgerHome(false)} src={close} alt="" />
            </div>
            <div className="burger-home_content_title">{title}</div>
            <div className="burger-home_content_lists">
                <ul>
                    <li className='burger-home_links'><a href="">Кардиотренажеры</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Силовые тренажеры   </a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Уличные виды спорта</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Свободные веса</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Игровые столы</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Массажное оборудование</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Фитнес аксессуары</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Функциональный тренинг</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                </ul>
            </div>
            <div className="burger-menu_content_tel_time_сall burger-menu_correct">
                <div className="content-burger_tel_time_icon">
                    <a className="content-burger_tel" href="tel:+7(800)000-00-00">+7(800) 000-00-00</a>
                </div>
                <div onClick={() => { setCallShow(true) }} className="content-burger_сall">Заказать звонок</div>
            </div>
            <div className="burger-menu_content_partner">
                <div className="burger-menu_diller">Для дилеров</div>
                <div className="burger-menu_became-partner">Become a partner</div>
            </div>
        </div >
        //</div>
    )
}

export default MenuHome