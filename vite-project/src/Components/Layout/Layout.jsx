import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MainHeader from "../Catalog/MainHeader/MainHeader";
import OrderCall from "../Forms/OrderCall/OrderCall";
import SearchPanel from "../../Components/Forms/SearchPanel/SearchPanel";
import BurgerMenu from "../Forms/BurgerMenu/BurgerMenu";
import ProductsPromotion from "./ProductsPromotion/ProductsPromotion";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import SearchCity from "../../Components/Forms/SearchCity/SearchCity";
import Footer from "../Footer/Footer";
function Layout({
    sortedCity,
    listSity,
    setCity,
    city,
    showCactalog,
    setShowCactalog,
    showBurgerMenu,
    setShowBurgerMenu,
    setCallShow,
    callShow,
    searchShow,
    setSearchShow,
    addCardLike,
    setLike,
    like,
    likeLength,
    showFavorites,
    setShowFavorites,
    basket,
    addCardComparison,
    basketLength,
    comparison,
    setShowComparison,
    setComparison,
    comparisonLength,
    showComparison,
    size,
    setSize,
    searchSity,
    setSearchSity,
}) {
    console.log(typeof size);

    return (
        <div>
            <Header
                setComparison={setComparison}
                setLike={setLike}
                searchSity={searchSity}
                setSearchSity={setSearchSity}
                city={city}
                size={size}
                setSize={setSize}
                showCactalog={showCactalog}
                setShowCactalog={setShowCactalog}
                showComparison={showComparison}
                comparisonLength={comparisonLength}
                comparison={comparison}
                setShowComparison={setShowComparison}
                basket={basket}
                showFavorites={showFavorites}
                like={like}
                setShowFavorites={setShowFavorites}
                likeLength={likeLength}
                basketLength={basketLength}
                setShowBurgerMenu={setShowBurgerMenu}
                setSearchShow={setSearchShow}
                setCallShow={setCallShow}
            />
            <OrderCall callShow={callShow} setCallShow={setCallShow} />
            <SearchCity
                setCity={setCity}
                sortedCity={sortedCity}
                listSity={listSity}
                searchSity={searchSity}
                setSearchSity={setSearchSity}
            />
            <SearchPanel
                searchShow={searchShow}
                setSearchShow={setSearchShow}
            />
            <BurgerMenu
                setCallShow={setCallShow}
                setShowBurgerMenu={setShowBurgerMenu}
                showBurgerMenu={showBurgerMenu}
            />
            <Outlet />

            <ProductsPromotion
                setComparison={setComparison}
                addCardComparison={addCardComparison}
                comparison={comparison}
                addCardLike={addCardLike}
                setLike={setLike}
                like={like}
            />

            <Footer size={size} setSize={setSize} />
        </div>
    );
}

export default Layout;

//setCallShow={props.setCallShow} setCatalogShow={props.setCatalogShow} catalogShow={props.catalogShow}
