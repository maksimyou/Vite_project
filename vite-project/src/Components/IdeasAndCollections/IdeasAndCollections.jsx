import React, { useState, useEffect } from "react";
import "./IdeasAndCollections.scss";
import MainHeader from "../Catalog/MainHeader/MainHeader";
import SpeciesOffers1 from "../SpeciesOffers/SpeciesOffers1";
import { useParams } from "react-router-dom";
import NavigationPage from "../Forms/NavigationPage/NavigationPage";

function IdeasAndCollections() {
    let [showall, setShowall] = useState(false);
    let params = useParams();

    console.log(params);
    return (
        <div className='ideas_and_collections_container'>
            <MainHeader title={"Идеи и подборки"} />
            <div className='ideas_and_collections_content'>
                <div className='ideas_and_collections_content_items'>
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    <SpeciesOffers1 />
                    {showall ? (
                        <>
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                            <SpeciesOffers1 />
                        </>
                    ) : (
                        ""
                    )}
                </div>

                {!showall ? (
                    !params.id ? (
                        <NavigationPage
                            showall={showall}
                            setShowall={setShowall}
                            id={1}
                        />
                    ) : (
                        <NavigationPage
                            showall={showall}
                            setShowall={setShowall}
                            id={params.id >= 6 ? 6 : params.id}
                        />
                    )
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default IdeasAndCollections;
