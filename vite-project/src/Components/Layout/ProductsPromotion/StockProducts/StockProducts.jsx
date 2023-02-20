import React, { useState } from "react";
import "./StockProducts.scss";
import ProductsPromotionCards from "../../../Cards/ProductsPromotionCards/ProductsPromotionCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { useEffect } from "react";

function StockProducts({
    addCardLike,
    setLike,
    like,
    basket,
    addCardBasket,
    setComparison,
    addCardComparison,
    comparison,
}) {
    let [sizeSlaid, setSizeSlaid] = useState(4.5);
    let [showNavigation, setShowNavigation] = useState(true);

    //copy.map(elem => {
    //    if (elem.id == ids && count >= 1) {
    //        elem.count += 1;
    //        return elem;
    //    } else {
    //        return elem;
    //    }
    //});

    function handlerSize() {
        window.addEventListener("resize", () => {
            let sizee = window.outerWidth;

            if (sizee <= 320) {
                setSizeSlaid(1);
            } else if (sizee <= 450) {
                setSizeSlaid(1.3);
            } else if (sizee <= 570) {
                setSizeSlaid(1.5);
            } else if (sizee <= 720) {
                setSizeSlaid(2);
            } else if (sizee <= 880) {
                setSizeSlaid(2.5);
            } else if (sizee <= 1050) {
                setSizeSlaid(3);
            } else if (sizee <= 1200) {
                setSizeSlaid(3.5);
            } else if (sizee >= 1360) {
                setSizeSlaid(4);
            }

            if (sizee <= 768) {
                setShowNavigation(false);
            } else if (sizee >= 768) {
                setShowNavigation(true);
            }
        });

        window.addEventListener("load", () => {
            let sizee = window.outerWidth;

            if (sizee <= 320) {
                setSizeSlaid(1);
            } else if (sizee <= 450) {
                setSizeSlaid(1.3);
            } else if (sizee <= 570) {
                setSizeSlaid(1.5);
            } else if (sizee <= 720) {
                setSizeSlaid(2);
            } else if (sizee <= 880) {
                setSizeSlaid(2.5);
            } else if (sizee <= 1050) {
                setSizeSlaid(3);
            } else if (sizee <= 1200) {
                setSizeSlaid(3.5);
            } else if (sizee <= 1360) {
                setSizeSlaid(4);
            }

            if (sizee <= 768) {
                setShowNavigation(false);
            } else if (sizee >= 768) {
                setShowNavigation(true);
            }
        });
    }

    //function showNavigationFunc() {
    //    window.addEventListener('resize', () => {
    //        let sizee = window.outerWidth;
    //        if (sizee <= 768) {
    //            setShowNavigation(false);
    //        } else if (sizee >= 768) {
    //            setShowNavigation(true);
    //        }
    //    })
    //};

    useEffect(() => {
        handlerSize();
    }, []);

    return (
        <div className='stock-products_container'>
            <Swiper
                className='stock-products_content'
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={sizeSlaid}
                navigation={showNavigation}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => {
                    console.log(swiper.size);
                }}
            >
                {Array.from({ length: 15 }).map((elem, i) => {
                    return (
                        <SwiperSlide key={"0-" + i}>
                            {" "}
                            <ProductsPromotionCards
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
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default StockProducts;
