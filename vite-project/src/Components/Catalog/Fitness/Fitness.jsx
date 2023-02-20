import React from "react";
import "./Fitness.scss";
import fitness_img1 from "../../../assets/img/fitness-1.png";
import CardsCatalog from "../../Cards/CardsCatalog";
import MainHeader from "../MainHeader/MainHeader";
import SpecialOffers from "../../Layout/SpecialOffers/SpecialOffers";

function Fitness() {
    return (
        <>
            <MainHeader title={"Для фитнес клубов"} />
            <div className='fitness_category_container_wrap'>
                <div className='fitness_category_container'>
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                    <CardsCatalog image={fitness_img1} />
                </div>
                <SpecialOffers />
            </div>
        </>
    );
}

export default Fitness;
