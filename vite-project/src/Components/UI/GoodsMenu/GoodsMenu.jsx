import React from 'react'
import './GoodsMenu.scss'
import image from '../../../assets/img/menu-sample.png'
function GoodsMenu({ text }) {
    return (
        <div className='goods-menu_container'>

            <div className="goods-menu_content">
                <div className="goods-menu_content_image"><img src={image} alt="" /></div>
                <div className="goods-menu_content_text">{text}</div>
            </div>
        </div>
    )
}

export default GoodsMenu