import React from 'react'
import './ProductsPromotionCards.scss'
import percent from '../../../assets/img/Component-1.png'
import like from '../../../assets/img/Component-2.png'
import neww from '../../../assets/img/Component-3.png'
import cards_products from '../../../assets/img/cards-products.png'
import ButtonCards from '../../UI/ButtonCards/ButtonCards'


function ProductsPromotionCards({ idCards, titleCard, price, addCardLike, likee, comparison, addCardComparison }) {

    //comparison={comparison} basket={basket} addCardComparison={addCardComparison}
    return (
        <div className='products-promotion-cards_container'>
            <div className="products-promotion-cards_content">
                <div className="products-promotion-cards_image_icons">
                    <img className='products-promotion-cards_image-img' src={cards_products} alt="" />
                    <div className="products-promotion-cards_icons">
                        <div className="products-promotion-cards_icons_1">
                            <img className="products-promotion-cards_icons_percent" src={percent} />
                            <img className="products-promotion-cards_icons_like" src={like} />
                            <img className="products-promotion-cards_icons_neww" src={neww} />
                        </div>

                        <div className="products-promotion-cards_icons_2">
                            <span onClick={() => { addCardLike(idCards, titleCard, price) }} className={(likee.filter(i => { if (i.id == idCards) return true; }).length) ? 'icon-Property-1- likes_color_card' : 'icon-Property-1Default likes_color_card_disable'}></span>
                            <span onClick={() => { addCardComparison(idCards, titleCard, price) }} className={(comparison.filter(i => { if (i.id == idCards) return true; }).length) ? 'icon-1 likes_color_card' : 'icon-1 likes_color_card_disable'}></span>

                        </div>
                    </div>
                </div>
                <div className="products-promotion-cards_info">
                    <div className="products-promotion-cards_info_has"><span className='cards_info_has_text'>?? ??????????????</span>
                        <span className='circle_has_info'></span>
                        <span className='circle_has_info'></span>
                        <span className='circle_has_info'></span>
                        <span className='in_the_showroom_has_info'>???????? ?? ??????-????????</span>
                    </div>
                    <div className="products-promotion-cards_info_title">{titleCard}</div>
                    <div className="products-promotion-cards_info_rating">??????????????<span className='products-promotion-cards_info_stars'>???????????????</span></div>
                    <div className="products-promotion-cards_info_price_and_btn">
                        <div className="products-promotion-cards_info_price">
                            <div className="cards_info_price_promotion">{price}</div>
                            <div className="cards_info_price_discount">{price}</div>
                        </div>
                        <ButtonCards text={'????????????'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPromotionCards