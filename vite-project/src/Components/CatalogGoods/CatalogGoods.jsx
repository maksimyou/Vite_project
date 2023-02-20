import React from "react";
import "./CatalogGoods.scss";
import NavigationPage from "../Forms/NavigationPage/NavigationPage";
import MainHeader from "../Catalog/MainHeader/MainHeader";
import FilteringOfGoods from "../UI/FilteringOfGoods/FilteringOfGoods";
import BannerAdvertising from "../UI/BannerAdvertising/BannerAdvertising";
import SortingOfGoods from "../UI/SortingOfGoods/SortingOfGoods";
import ProductsPromotionCards2 from "../Cards/ProductsPromotionCards/ProductsPromotionCards2";
function CatalogGoods({
    showFilter,
    setShowFilter,
    addCardBasket,
    comparison,
    basket,
    addCardComparison,
    like,
    addCardLike,
}) {
    return (
        <div className='catalog_goods_container'>
            <div className='catalog_goods_content'>
                <MainHeader title={"Текст из параметров"} />
                {/*<BannerAdvertising />*/}
                <SortingOfGoods setShowFilter={setShowFilter} />
                <div className='catalog_goods_content_items'>
                    <div className='catalog_goods_content_products_cards_and_nav'>
                        <div className='catalog_goods_content_items_wrap'>
                            {Array.from({ length: 20 }).map((elem, i) => {
                                return (
                                    <ProductsPromotionCards2
                                        key={"0-" + i}
                                        addCardBasket={addCardBasket}
                                        comparison={comparison}
                                        basket={basket}
                                        addCardComparison={addCardComparison}
                                        likee={like}
                                        addCardLike={addCardLike}
                                        price={"1 134 900 ₽"}
                                        titleCard={
                                            "Беговая дорожка CardioPower T20 Plus"
                                        }
                                        idCards={i + 10}
                                    />
                                );
                            })}
                        </div>
                        <div className='catalog_goods_content_navigation'>
                            <NavigationPage id={1} />
                        </div>
                    </div>
                    <FilteringOfGoods
                        setShowFilter={setShowFilter}
                        showFilter={showFilter}
                    />
                </div>
            </div>
        </div>
    );
}

export default CatalogGoods;
