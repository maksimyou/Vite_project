import React from "react";
import "./PopUpInfoCard.scss";
function PopUpInfoCard({ idd, nameCard, price, setList, list }) {
    return (
        <div key={idd} className='favorites-cards_item'>
            <div className='favorites-cards_item_info'>
                <img
                    className='favorites-cards_item_info_img'
                    src='https://s3-alpha-sig.figma.com/img/c068/7e2f/80a6dcd8a8c7bba936a7c652879107a3?Expires=1676851200&Signature=cbs-eFR02o1eEKd6cZg6mh8rGqz7kp8JqAGlCp3KZTxUFS6UG8efZY2KL3Qc5yXN3rIupUwH95eVyzO7NcsBtgn-mOOHxYnd97KKxHFzmHnXSEymrQZHxV-zgDhQCpjBrhfkNpoJn6l3vO6uhdMV0vMcTIElOPsb9NuY1yOduZ28avcpYxiIP1r6EU5y5xqpYEr3IiYXXl9gf0sJhCjYdX75j2uQlp6lhuBIBQBy4nBMyHl2MvIwOv2yNPZz3Eq7xf92kGoshOAc2XE079cavCw-KWZ1W-2jhJ7cpMYYp2XKF~P1~KCx6J~AhkVAsPwQV0N41yEWlMpI2O9JiaxIYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                />
                <div className='favorites-cards_item_info_title'>
                    {nameCard}
                </div>
            </div>
            <div className='favorites-cards_item_price_close'>
                <div className='favorites-cards_item_price'>{price}</div>
                <div
                    onClick={() => {
                        setList(
                            //let copy = like;
                            list.filter((elem) => {
                                if (elem.id != idd) {
                                    return elem;
                                }
                            })
                        );
                    }}
                    className='favorites-cards_item_close'
                >
                    ✕
                </div>
            </div>
        </div>
    );
}

export default PopUpInfoCard;
