import React from "react";
import "./PopUpInfoCards1.scss";
import PopUpInfoCard from "../../Cards/PopUpInfoCard/PopUpInfoCard";

import ButtonSend from "../../UI/ButtonSend/ButtonSend";
function PopUpInfoCards1({
    comparison,
    showComparison,
    setShowComparison,
    setComparison,
}) {
    return (
        <div
            onMouseLeave={() => setShowComparison(true)}
            onMouseEnter={() => setShowComparison(false)}
            className={
                showComparison
                    ? "favorites_contaianer2"
                    : "favorites_contaianer2 show_favorites_contaianer"
            }
        >
            <div className='favorites_content'>
                {comparison.map((i, n) => {
                    if (n < +2)
                        return (
                            <PopUpInfoCard
                                idd={i.id}
                                setList={setComparison}
                                nameCard={i.nameCard}
                                price={i.price}
                                list={comparison}
                            />
                        );
                })}
                <div className='favorites_button_container'>
                    <ButtonSend text={"Сравнить"} />
                </div>
            </div>
        </div>
    );
}

export default PopUpInfoCards1;
