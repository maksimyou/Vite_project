import React from "react";
import "./Cards.scss";
import PopUpInfoCards from "../../Forms/PopUpInfoCards/PopUpInfoCards";
import PopUpInfoCards1 from "../../Forms/PopUpInfoCards1/PopUpInfoCards1";

function Cards({
    setComparison,
    setLike,
    width,
    likeLength,
    setShowFavorites,
    setShowComparison,
    showFavorites,
    showComparison,
    like,
    basket,
    comparison,
    basketLength,
    comparisonLength,
}) {
    //setShowComparison={setShowComparison} showComparison={showComparison} comparison={comparison}

    return (
        <div className='header_content-2_menu_cards'>
            {width >= 510 ? (
                <div
                    onMouseEnter={() => setShowComparison(!showComparison)}
                    onMouseLeave={() => setShowComparison(!showComparison)}
                    className={
                        showComparison
                            ? "content-2_menu_cards_card icon-1"
                            : "content-2_menu_cards_card-red icon-1"
                    }
                >
                    <span className='cards_card_count'>
                        <span>{comparisonLength}</span>
                    </span>
                </div>
            ) : (
                ""
            )}
            {width >= 510 ? (
                <div
                    onMouseLeave={() => setShowFavorites(!showFavorites)}
                    onMouseEnter={() => setShowFavorites(!showFavorites)}
                    className={
                        showFavorites
                            ? "content-2_menu_cards_card icon-Property-1Default"
                            : "content-2_menu_cards_card-red icon-Property-1Default"
                    }
                >
                    <span className='cards_card_count'>
                        <span>{likeLength}</span>
                    </span>
                </div>
            ) : (
                ""
            )}
            <div className='content-2_menu_cards_card icon-bag_iconsvg'>
                <span className='cards_card_count'>
                    <span>{basketLength}</span>
                </span>
            </div>
            <PopUpInfoCards
                setLike={setLike}
                setShowFavorites={setShowFavorites}
                showFavorites={showFavorites}
                like={like}
            />
            <PopUpInfoCards1
                setComparison={setComparison}
                setShowComparison={setShowComparison}
                showComparison={showComparison}
                comparison={comparison}
            />
        </div>
    );
}

export default Cards;
