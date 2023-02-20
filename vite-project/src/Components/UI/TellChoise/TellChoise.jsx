import React from "react";
import "./TellChoise.scss";
function TellChoise({ setTellShow, setTell }) {
    return (
        <div
            onMouseEnter={() => {
                setTellShow(true);
            }}
            onMouseLeave={() => {
                setTellShow(false);
            }}
            className='tell-choise_container'
        >
            <div className='tell-choise_content'>
                <div className='tell-choise_content_tell-1'>
                    <div
                        onClick={(e) => {
                            setTell(e.target.textContent);
                            setTellShow(false);
                        }}
                        className='tell-choise_content_tell-1_number'
                    >
                        +7 (800) 000-00-00
                    </div>
                    <div className='tell-choise_content_tell-1_text'>
                        для Москвы
                    </div>
                </div>
                <div className='tell-choise_content_tell-2'>
                    <div
                        onClick={(e) => {
                            setTell(e.target.textContent);
                            setTellShow(false);
                        }}
                        className='tell-choise_content_tell-2_number'
                    >
                        +7 (800) 700-80-60
                    </div>
                    <div className='tell-choise_content_tell-2_text'>
                        для регионов РФ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TellChoise;
