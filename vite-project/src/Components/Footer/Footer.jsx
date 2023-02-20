import React from "react";
import "./Footer.scss";
import FooterMenuItem from "./FooterMenuItem/FooterMenuItem";
import FooterSubscript from "./FooterSubscript/FooterSubscript";
import FooterLogoSocial from "./FooterLogoSocial/FooterLogoSocial";
import FooterPatner from "./FooterPatner/FooterPatner";
import PaymentSystems from "./PaymentSystems/PaymentSystems";

import {
    footerCatalog,
    footerSupport,
    footerServices,
    footerAboutCompany,
} from "../../assets/data/data";
function Footer({ size, setSize }) {
    console.log(typeof size, size);

    return (
        <div className='footer_container'>
            <div className='footer_content'>
                <div className='footer_content__sections_of_the_menu'>
                    <div className='footer_content__sections_of_the_menu_navigation'>
                        <FooterMenuItem
                            title={footerCatalog.title}
                            subtitle={footerCatalog.subtitle}
                        />
                        <FooterMenuItem
                            title={footerSupport.title}
                            subtitle={footerSupport.subtitle}
                        />{" "}
                        <FooterMenuItem
                            title={footerServices.title}
                            subtitle={footerServices.subtitle}
                        />{" "}
                        <FooterMenuItem
                            title={footerAboutCompany.title}
                            subtitle={footerAboutCompany.subtitle}
                        />
                    </div>
                    <div className='footer_content__sections_of_the_menu__subscribe'>
                        <FooterSubscript size={size} setSize={setSize} />
                    </div>
                </div>
                <div className='footer_content__logo-and-communication-with-us'>
                    <FooterLogoSocial />
                    {size > 1205 ? <FooterPatner /> : ""}
                    <PaymentSystems />
                </div>
            </div>
        </div>
    );
}

export default Footer;
