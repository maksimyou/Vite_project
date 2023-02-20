import React from 'react'
import './OrderCall.scss'
import ButtonSend from '../../UI/ButtonSend/ButtonSend'
import close from '../../../assets/img/close-sceen.png'

function OrderCall({ callShow, setCallShow }) {





    return (
        <div className={callShow ? 'container_order_call order_call_active' : 'container_order_call'}>
            <div className='order_call_content'>
                <div className='order_call_content_close'><img onClick={() => {
                    setCallShow(false)
                }} src={close} /></div>
                <div className='order_call_content_title'>Заявка на обратный звонок</div>
                <form className='order_call_content_form'>
                    <div className='order_call_form_lable'>Имя<span> *</span> <br /> <input className='order_call_form_input' placeholder='Имя' type='text' /></div>
                    <div className='order_call_form_lable'>Телефон<span> *</span> <br /> <input className='order_call_form_input' placeholder='+7 (_ _ _) - _ _ _ - _ _ - _ _' type='tel' /></div>
                    <div className='order_call_content_agreement'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href="">политикой конфиденциальности</a></div>
                    <div className='order_call_content_wrap'><ButtonSend text={'Заказать звонок'} /></div>
                </form>
            </div>
        </div>
    )
}

export default OrderCall