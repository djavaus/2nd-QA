import React from "react";
import instLogo from "../assets/footer__inst.png"
import twitterLogo from "../assets/footer__tw.png"
import fbLogo from "../assets/footer__fb.png"
import linkedLogo from "../assets/footer__linked.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__img"><img src={instLogo}/></div>
                    <div className="footer__img"><img src={twitterLogo}/></div>
                    <div className="footer__img"><img src={fbLogo}/></div>
                    <div className="footer__img"><img src={linkedLogo}/></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer