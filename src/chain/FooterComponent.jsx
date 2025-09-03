import React from "react";

import test from './img/test.svg';
import Discord_black from './img/Discord_black.svg';
import Twitter_black from './img/Twitter_black.svg';
import Telegram_black from './img/Telegram_black.svg';

const Footer = () => {
    return (
        <>
        <div className="container_fluid" style={{width:'100vw'}}>
            <div className="row footer">
                <div className="col-sm-4 icon_holder">
                     <img src={test} alt="Sample" className="icon_mobile" />
                       <div className="email_box">
                                <h3>Subscribe now for<br/> Updates</h3>
                                <input type="email" placeholder="Email"/><button>Subscribe</button>
                    </div>                
                </div>
                <div className="col-sm-2 link_list">
                    <p>About Us</p>
                     <p>Blogs</p>
                      <p>FAQs</p>
                </div>
                <div className="col-sm-2 link_list">
                    <p>Terms of Use</p>
                     <p>Privacy Policy</p>
                      <p>Contact Us</p>
                </div>
                <div className="col-sm-4 social">
                    <div className="col-sm-12">
                        <span>
                            <img src={Discord_black}/>
                            <img src={Twitter_black}/>
                            <img src={Telegram_black}/>
                        </span>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    <p>copyright@2022 Chaindustry</p>
                </div>


            </div>
        </div>
        </>
    )
}
export default Footer;