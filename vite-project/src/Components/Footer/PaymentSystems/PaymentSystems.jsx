import React from "react";
import "./PaymentSystems.scss";
import visa from "../../../assets/img/symbols.png";
import mastercard from "../../../assets/img/mastercard.png";
import symbols from "../../../assets/img/symbols-2.png";
import paypal from "../../../assets/img/paypal-logo.png";

function PaymentSystems() {
    return (
        <div className='payment-systems_container'>
            <div className='payment-systems_content'>
                <img src={visa} className='payment-systems_content_visa' />
                <img
                    src={mastercard}
                    className='payment-systems_content_mastercard'
                />
                <img
                    src={symbols}
                    className='payment-systems_content_symbols'
                />
                <img src={paypal} className='payment-systems_content_paypal' />
            </div>
        </div>
    );
}

export default PaymentSystems;
