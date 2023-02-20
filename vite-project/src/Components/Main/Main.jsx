import React from "react";
import "./Main.scss";
import Banner from "./Banner/Banner";
import Simulator from "./Simulator/Simulator";
import FitnessClub from "./FitnessClub/FitnessClub";
import BrandRadels from "./BrandRadels/BrandRadels";
import SpecialOffers from "../Layout/SpecialOffers/SpecialOffers";

function Main(props) {
    return (
        <div className='main_container'>
            <Banner />
            <Simulator />
            <FitnessClub />
            <SpecialOffers />
            <BrandRadels />
        </div>
    );
}

export default Main;
