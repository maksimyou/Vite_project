import React from 'react'
import './ProductsPromotion.scss'
import StockProducts from './StockProducts/StockProducts'
import Button from '../../UI/Button/Button'


function ProductsPromotion({ addCardLike, setLike, like, styleColorCards, setComparison, addCardComparison, comparison }) {


    return (
        <div className='products-promotion_container'>
            <div className="products-promotion_content">
                <div className="products-promotion_content_titles">
                    <div className="products-promotion_content_title products-promotion_selected">Акция</div>
                    <div className="products-promotion_content_title">Новинки</div>
                    <div className="products-promotion_content_title">Мы рекомендуем</div>
                </div>
                <div className="products-promotion_content_swipers">
                    <StockProducts styleColorCards={styleColorCards} addCardLike={addCardLike} setLike={setLike} like={like} setComparison={setComparison} addCardComparison={addCardComparison} comparison={comparison} />
                    {/*<component2/>*/}
                    {/*<component3/>*/}
                </div>

                <div className="button_wrapper_product"><Button text={'Все товары по акции'} /></div>
            </div>
        </div>
    )
}

export default ProductsPromotion