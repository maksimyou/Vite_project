import React, { useState, useEffect } from 'react'
//import { useState, useEffect } from 'react-dom'
import './MainHeader.scss'
function MainHeader({ title }) {


    return (
        <div className='main-header_container'>
            <div className='main-header_content'>
                <div className='content_crumbs_icon_text'>
                    <span className='icon-crumbs crumbs-main_header'></span>
                    <div className='main-header_content_crumbs'>{title}</div>
                </div>
                <div className='main-header_content_title'>{title}</div>
            </div>
        </div>

    )
}

export default MainHeader