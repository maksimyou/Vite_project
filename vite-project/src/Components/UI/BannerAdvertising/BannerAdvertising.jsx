import React from "react";
import "./BannerAdvertising.scss";
import banner from "../../../assets/img/bunner.png";
import Button from "../../UI/Button/Button";

function BannerAdvertising() {
    return (
        <div className='banner_container_slide'>
            <div className='container_slider_wrappp'>
                <div className='container_slide_wrap_1'>
                    <div className='slide_wrap_1_content'>
                        <div className='wrap_1_content_title'>Zero Runner</div>
                        <div className='wrap_1_content_subtitle'>
                            Бег с нулевой
                            <br /> ударной
                            <br /> нагрузкой
                            <br />
                            <span> на суставы</span>
                        </div>
                        <div className='wrap_1_content_button'>
                            <Button text={"Узнать больше"} />
                        </div>
                    </div>
                    <div className='wrap_1_content_image'>
                        <img src={banner}></img>
                    </div>
                </div>
                <div className='container_slide_wrap_2'></div>
            </div>
        </div>
    );
}

export default BannerAdvertising;
