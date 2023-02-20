import React from "react";
import "./FooterLogoSocial.scss";
import logoFooter from "../../../assets/img/logo.png";
function FooterLogoSocial() {
    return (
        <div className='footer-logo-social_container'>
            <div className='footer-logo-social_content'>
                <div className='footer-logo-social_content_logo_rights'>
                    <img
                        src={logoFooter}
                        className='footer-logo-social_content_logo'
                    />
                    <div className='footer-logo-social_content_rights'>
                        © WellFitness. 2007 Все права защищены
                    </div>
                </div>
                <div className='footer-logo-social_content_social'>
                    <div className='icon-insta footer-logo-social_content_social_inst'></div>
                    <div className=' icon-akar-icons_facebook-fill footer-logo-social_content_social_facebook'></div>
                    <div class='icon-youtube footer-logo-social_content_social_youtube'></div>
                </div>
            </div>
        </div>
    );
}

export default FooterLogoSocial;
