import React from "react";
import "./PopUpInfoCards.scss";
import PopUpInfoCard from "../../Cards/PopUpInfoCard/PopUpInfoCard";

import ButtonSend from "../../UI/ButtonSend/ButtonSend";
function PopUpInfoCards({ like, showFavorites, setShowFavorites, setLike }) {
    return (
        <div
            onMouseLeave={() => setShowFavorites(true)}
            onMouseEnter={() => setShowFavorites(false)}
            className={
                showFavorites
                    ? "favorites_contaianer"
                    : "favorites_contaianer show_favorites_contaianer"
            }
        >
            <div className='favorites_content'>
                {like.map((i, n) => {
                    if (n < +2)
                        return (
                            <PopUpInfoCard
                                list={like}
                                setList={setLike}
                                idd={i.id}
                                nameCard={i.nameCard}
                                price={i.price}
                            />
                        );
                })}
                <div className='favorites_button_container'>
                    <ButtonSend text={"Перейти в избранное"} />
                </div>
            </div>
        </div>
    );
}

export default PopUpInfoCards;
