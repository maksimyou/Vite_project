import React from 'react'
import './Simulator.scss'
import Button from '../../UI/Button/Button'
import { useEffect } from 'react';

function Simulator() {



    function changeColorTextEnter(event) {
        if (event.target.classList[1] == 'text_color') {
            event.target.classList.add('simylator_active_bgr');
            event.target.firstChild.classList.add('simylator_active_text');


        } else if (event.target.classList[0] == 'title_simulator_card') {
            event.target.classList.add('simylator_active_text');
            event.target.parentElement.classList.add('simylator_active_bgr');
        }
    };


    function changeColorTextOutput(event) {
        if (event.target.classList[1] == 'text_color') {
            event.target.classList.remove('simylator_active_bgr');
            event.target.firstChild.classList.remove('simylator_active_text');
        }
    };


    return (
        <div className='simulator_container'>
            <div className='simulator_container_title'>Тренажеры для дома</div>
            <div className='simulator_container-1'>
                <div className='simulator_container-1_row-1'>
                    <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_image_1 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Беговые <br />дорожки</span></div>
                    <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_image_2 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>"Эллиптические" <br />тренажеры</span></div>
                </div>
                <div className='simulator_container-1_row-2'>
                    <div className='simulator_row-1_wrapp-1'>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-1_image_1 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Велотренажеры</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-1_image_2 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Горнолыжные <br />тренажеры</span></div>
                    </div>
                    <div className='simulator_row-1_wrapp-2'>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-2_image_1 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Силовые <br />тренажеры</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-2_image_2 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Гребные <br />тренажеры</span></div>
                    </div>
                </div>

            </div>
            <div className='simulator_container-2'>
                <div className='simulator_container-2_row-1'>
                    <div className='simulator_row-1_wrapp-3'>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-3_image_1 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Батуты</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-3_image_2 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Игровые <br />столы</span></div>
                    </div>


                    <div className='simulator_row-1_wrapp-4'>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-4_image_1 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Массажные<br />кресла</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className='simulator_row-1_wrapp-4_image_2 text_color'><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='title_simulator_card'>Фитнес <br />аксессуары</span></div>
                    </div>
                </div>

            </div>
            <div className="simulator_button"><Button text={'Все категории'} /></div>
        </div>
    )
}

export default Simulator