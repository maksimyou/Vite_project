import React from "react";
import "./Home.scss";
import home_img1 from "../../../assets/img/home-1.png";
import CardsCatalog from "../../Cards/CardsCatalog";
import MainHeader from "../MainHeader/MainHeader";
import SpecialOffers from "../../Layout/SpecialOffers/SpecialOffers";

function Home({}) {
    return (
        <>
            <MainHeader title={"Тренажеры для дома"} />
            <div className='home_category_container_wrap'>
                <div className='home_category_container'>
                    <CardsCatalog link={"home/catalog"} image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                    <CardsCatalog image={home_img1} />
                </div>
                <SpecialOffers />
            </div>
        </>
    );
}

export default Home;
