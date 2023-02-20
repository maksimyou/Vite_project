import React from 'react'
import close from '../../../../assets/img/close-sceen.png'
import './MenuFitness.scss'
function MenuFitness({ setCallShow, title, showBorgerFitness, setShowBorgerFitness }) {




    return (
        <div className={showBorgerFitness ? "burger-fitness_content burger-fitness-active" : 'burger-fitness_content'
        }>
            <div className="burger-home_content_navigation">
                <div className="burger-home_content_back" onClick={() => setShowBorgerFitness(false)}>Назад</div>
                <img className='burger-home_content_close' onClick={() => setShowBorgerFitness(false)} src={close} alt="" />
            </div>
            <div className="burger-home_content_title">{title}</div>
            <div className="burger-home_content_lists">
                <ul>
                    <li className='burger-home_links'><a href="">Кардиотренажеры</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Силовые тренажеры   </a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Функциональный тренинг  </a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Свободные веса</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Аэробика</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Wellness, СПА, массаж    </a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Реабилитация и спортивная медицина</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href="">Оборудование для бассейнов</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
                    <li className='burger-home_links'><a href=""> Средства гигиены</a><span className='icon-arrow-right-33 burger-home_style'></span></li>
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
    )
}

export default MenuFitness