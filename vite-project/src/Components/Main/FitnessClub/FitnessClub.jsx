import React from 'react'
import './FitnessClub.scss'
import Button from '../../UI/Button/Button'

function FitnessClub() {


    function changeColorTextEnter(event) {
        if (event.target.classList[1] == 'text_color_fitnes') {
            event.target.classList.add('simylator_active_bgr');
            event.target.firstChild.classList.add('simylator_active_text');


        } else if (event.target.classList[1] == 'title_fitness-club_card') {
            event.target.classList.add('simylator_active_text');
            event.target.parentElement.classList.add('simylator_active_bgr');
        }
    };


    function changeColorTextOutput(event) {
        if (event.target.classList[1] == 'text_color_fitnes') {
            event.target.classList.remove('simylator_active_bgr');
            event.target.firstChild.classList.remove('simylator_active_text');
        }
    };







    return (
        <div className='fitness-club_container'>
            <div className="fitness-club_content">
                <div className="fitness-club_content_title">Для фитнес клубов</div>
                <div className="fitness-club_content_line-1">
                    <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-1_fitness-club_block1 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='null title_fitness-club_card'>Профессиональные<br /> кардиотренажеры</span></div>
                    <div className="line-1_fitness-club_block2">
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-1_fitness-club_block2_image1 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='line-1_fitness-club_block2_image1_text1 title_fitness-club_card'>Грузоблочные<br /> тренажеры</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-1_fitness-club_block2_image2 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='line-1_fitness-club_block2_image2_text2 title_fitness-club_card'>Тренажеры <br />на свободных<br />
                            весах</span></div>
                    </div>
                </div>
                <div className="fitness-club_content_line-2">
                    <div className="line-2_fitness-club_block1">
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-2_fitness-club_block1_image1 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='line-2_fitness-club_block1_image1_text1 title_fitness-club_card'>Функциональный <br />тренинг</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-2_fitness-club_block1_image2 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='line-2_fitness-club_block1_image2_text2 title_fitness-club_card'>Wellness,<br />
                            СПА, Массаж  </span></div>
                    </div>
                    <div className="line-2_fitness-club_block2">
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-2_fitness-club_block2_image1 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='line-2_fitness-club_block2_image1_text1 title_fitness-club_card'>Спортивная<br /> медицина<br /> и реабилитация</span></div>
                        <div onMouseEnter={(e) => { changeColorTextEnter(e); }} onMouseOut={(e) => { changeColorTextOutput(e) }} className="line-2_fitness-club_block2_image2 text_color_fitnes"><span onMouseEnter={(e) => { changeColorTextEnter(e); }} className='line-2_fitness-club_block2_image2_text2 title_fitness-club_card'>Свободные<br />
                            веса</span></div>
                    </div>
                </div>
                <div className="fitness-club_button_content">
                    <div className="fitness-club_button"><Button text={'Все категории'} /></div>
                </div>

            </div>
        </div>
    )
}

export default FitnessClub