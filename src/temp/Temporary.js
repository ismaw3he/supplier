import React from "react"
import "./assets/css/style_2.css";
import Account from "../components/account/Account";
import localGetter from "../generals/localGetter";
import {connect} from "react-redux";


import yourLogo from "./assets/img/your-logo.png";
import search from "./assets/icon/search.svg";
import product from "./assets/icon/product_icon.svg";
import wishlist from "./assets/icon/wishlist.svg";
import cart from "./assets/icon/cart.svg";
import arrowDown from "./assets/icon/arrow-drop-down-material-copy-4.svg";
import safety from "./assets/icon/safety.svg";
import clean from "./assets/icon/clean.svg";
import doctor from "./assets/icon/doctor.svg";
import arrowRight from "./assets/icon/btn-arrow-right.svg";
import arrowRightMaterial from "./assets/icon/keyboard-arrow-right-material-copy-12.svg";
import tnf_1 from "./assets/img/tnf_1.png";
import tnf_red from "./assets/img/tnf_red.jpg";
import tnf_tshirt from "./assets/img/tnf_tshirt.jpg";
import tnf_gloves from "./assets/img/tnf_gloves.jpg";
import tnf_bag from "./assets/img/tnf_bag.jpg";
import hat from "./assets/img/hat.jpg";
import sock from "./assets/img/sock.jpg";
import shoes from "./assets/img/shoes.jpg";
import btnArrowLearn from "./assets/icon/btn-arrow-learn-more.svg";
import lft from "./assets/img/lft-pic.jpg";
import rgt from "./assets/img/rgt-pic.jpg";
import linkedin from "./assets/icon/linkedin.svg";
import facebook from "./assets/icon/facebook.svg";
import twitter from "./assets/icon/twitter.svg";
import apple from "./assets/icon/apple_logo.svg";
import google from "./assets/icon/google-play.svg";
import instagram from "./assets/icon/instagram.svg";
import logoWhite from "./assets/img/your-logo-white.png";

const Temporary = ({data}) => {
    return (
        <div>
            {console.log(data)}
            {/* Header */}
            <header id="header">
                <nav className="header__nav">
                    <div className="nav__container">
                        <a href="/"><img src={yourLogo} alt="your_logo" /></a>
                        <div className="nav__search">
                            <input className="nav__search-input" type="text" name="search" 
                                placeholder="What are you looking for…" />
                            <button className="search-btn">
                                <img src={search} alt="btn_search_icon" />
                                <span>Search</span>
                            </button>
                            <div className="products">
                                <span>Products</span>
                                <img src={product} alt="arrow_icon" />
                            </div>
                        </div>
                        <div className="right-sec">
                            <div className="right-sec__left-icons">

                                <div className="wishlist">
                                    <a href="/"><img src={wishlist} alt="wishlist_icon" /></a>
                                    <span className="tooltip-wis">Wishlist</span>
                                </div>
                                <div className="cart">
                                    <a href="/"><img src={cart} alt="cart_icon" /></a>
                                    <span className="tooltip-cart">Cart</span>
                                </div>
                            </div>

                            {/* <div className="my-account"> */}
                                {/* <div className="user">
                                    <button className="btn-sign-in">Sign in</button>
                                    <button className="btn-register animate__animated animate__pulse">Register</button>
                                </div> */}
                                <Account loggedIn={data.name?true:false} fullName={data.name? data.name + " " + data.surname : ""}/>
                            {/* </div> */}
                        </div>
                    </div>
                </nav>
                <nav className="menu">
                    <div className="menu_container">
                        <div className="menu__left-itmes"></div>

                        <div className="menu__right-itmes">
                            <div className="buyers">
                                <a className="header-sc" href="/">HEADER v1</a>
                                <img src={arrowDown} alt="" />
                            </div>
                            <div className="buyers">
                                <span>FOR BUYERS</span>
                                <img src={arrowDown} alt="" />
                            </div>
                            <div className="buyers">
                                <span>CREATE YOUR STORE FOR FREE</span>
                                <img src={arrowDown} alt="" />
                            </div>
                            <div className="buyers-last">
                                <span>English - USD</span>
                                <img src={arrowDown} alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Slide */}

            <section id="slide">
                <div className="slide__container">
                    <div className="protective__container">
                        <div className="protective">
                            <span>Personal Protective Equipment</span>
                            <div className="divider-1"></div>
                            <ul>
                                <li><a href="/"><img src={safety} alt="icon" />Protective Equipment</a></li>
                                <div className="divi-2"></div>
                                <li><a href="/"><img src={clean} alt="icon" />Disinfectants</a></li>
                                <div className="divi-2"></div>
                                <li><a href="/"><img src={doctor} alt="icon" />Medical Devices</a></li>
                                <div className="divi-2"></div>
                                <li><a href="/">View more</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="slide__line-scd">
                        <div className="left_categories">
                            <div className="view_all">
                                <span>Categories</span>
                                <span>View All</span>
                            </div>
                            <div className="menu1">
                                <span>Consumer Electronics</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Apparel</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Vehicles & Accessories</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Sports & Entertainment</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Machinery</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Home & Garden</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Beauty & Personal Care</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Car Electronic & GPS</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Cameras & Photography</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Gadgets</span>
                                <img src={arrowRight} alt="" />
                            </div>
                            <div className="menu1">
                                <span>Accesories</span>
                                <img src={arrowRight} alt="" />
                            </div>
                        </div>

                        <div className="center__slider">
                            <div className="slider_content">
                                <h5>Alexa, Turn it up</h5>
                                <h2>All-new Echo <br />
                            3rd Generation</h2>
                                <button className="btn-big">
                                    <span>Learn More</span>
                                    <img src={arrowRight} alt="btn_arrow" />
                                </button>
                                <div className="dott">
                                    <img className="dott_arrow" src={arrowRightMaterial}
                                        alt="btn_arrow" />
                                    <div className="dott-1"></div>
                                    <div className="dott-1"></div>
                                    <div className="dott-1"></div>
                                    <img className="dott_arrow" src={arrowRight} alt="btn_arrow" />
                                </div>
                            </div>

                            <img className="tnf" src={tnf_1} alt="tnf_slide" />

                            <div className="slider-arrows">
                                <div className="left-btn">
                                    <img className="dott_left" src={arrowRightMaterial}
                                        alt="btn_arrow" />
                                </div>
                                <div className="right-btn">
                                    <img className="dott_left" src={arrowRight} alt="btn_arrow" />
                                </div>
                            </div>
                        </div>

                        <div className="right_items">
                            <div className="tnf_red">
                                <div className="left-text">
                                    <h4>SHOT THE <br />
                                JACKET</h4>
                                    <div className="btn-now">
                                        Source now
                                <div className="circle">
                                            <img src={arrowRight} alt="icon_arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="img_cont-1">
                                    <img className="tnf_red_img" src={tnf_red} alt="tnf_red" />
                                </div>
                            </div>

                            <div className="div1"></div>

                            <div className="tnf_red">
                                <div className="left-text">
                                    <h4>SHOP THE <br />
                                GLOVES</h4>
                                    <div className="btn-now">
                                        Source now
                                <div className="circle">
                                            <img src={arrowRight} alt="icon_arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="img_cont-2">
                                    <img className="gloves" src={tnf_gloves} alt="tnf_red" />
                                </div>
                            </div>

                            <div className="div1"></div>

                            <div className="tnf_red">
                                <div className="left-text">
                                    <h4>SHOT THE <br />
                                T-SHIRTS</h4>
                                    <div className="btn-now">
                                        Source now
                                <div className="circle">
                                            <img src={arrowRight} alt="icon_arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="img_cont-3">
                                    <img className="tshirt" src={tnf_tshirt} alt="tnf_red" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Recommendation For You SECTION */}

            <section id="product-sec">

                <div className="product-sec__container">
                    <div className="prd_head">
                        <h3>RECOMMENDATION FOR YOU</h3>
                        <div className="view-all">
                            <h5>View All Products</h5>
                            <img src={arrowRight} alt="right_icon" />
                        </div>
                    </div>
                    <div className="product_cards">
                        <div className="product_cards-card">
                            <div className="card_img">
                                <img src={tnf_bag} alt="tnf_bag" />
                            </div>
                            <div className="card_text">
                                <h6>Backpacks</h6>
                                <span>Women’s Jester <br />
                            Backpack</span>
                                <h3>$ 69.00</h3>
                            </div>
                        </div>
                        <div className="product_cards-card">
                            <div className="card_img">
                                <img id="hat" src={hat} alt="tnf_hat" />
                            </div>
                            <div className="card_text">
                                <h6>Beanies & Scarves</h6>
                                <span>Women’s Oh-mega Fur <br />
                            Pom Beanie</span>
                                <h3>$ 42.00</h3>
                            </div>
                        </div>
                        <div className="product_cards-card">
                            <div className="card_img">
                                <img id="sock" src={sock} alt="tnf_bag" />
                            </div>
                            <div className="card_text">
                                <h6>Smartwool Socks</h6>
                                <span>Smartwool Men’s Fantastic <br />
                            Flamingos Crew Socks</span>
                                <h3>$ 21.00</h3>
                            </div>
                        </div>
                        <div className="product_cards-card">
                            <div className="card_img">
                                <img id="shoes" src={shoes} alt="tnf_bag" />
                            </div>
                            <div className="card_text">
                                <h6>Shoes</h6>
                                <span>Men’s Ultra Fastpack III <br />
                            Futurelight (Woven)</span>
                                <h3>$ 170.00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}

            <section id="trade-service">
                <div className="trade-service__container">
                    <div className="prd_head">
                        <h3>OUR TRADE SERVICES ARE HERE FOR YOU
                </h3>
                        <div className="view-all">
                            <h5>View All</h5>
                            <img src={arrowRight} alt="right_icon" />
                        </div>
                    </div>
                    <div className="service-cards">
                        <div className="service-cards__card">
                            <div className="service-card_img">
                                <img className="left-pic" src={lft} alt="" />
                            </div>

                            <div className="service-card_text">
                                <h3 className="service-card_text__head">Inspection solution</h3>
                                <span className="service-card_text__head-small">INSPECTION</span>
                                <p className="servic-card-discr">Production monitoring and inspection <br /> services on your
                            Alibaba.com Trade Assurance orders.</p>
                                <div className="btn-learn-more">
                                    <span>Learn more</span>
                                    <img src={btnArrowLearn} alt="left-pic" />
                                </div>
                            </div>
                        </div>
                        <div className="service-cards__card">
                            <div className="service-card_img">
                                <img className="left-pic" src={rgt} alt="" />
                            </div>

                            <div className="service-card_text">
                                <h3 className="service-card_text__head">Inspection solution</h3>
                                <span className="service-card_text__head-small">INSPECTION</span>
                                <p className="servic-card-discr">Production monitoring and inspection <br /> services on your
                            Alibaba.com Trade Assurance orders.</p>
                                <div className="btn-learn-more">
                                    <span>Learn more</span>
                                    <img src={btnArrowLearn} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REQUEST FOR QUOTATION SECTION */}

            <div className="quotation">
                <div className="quotation_container">
                    <div className="prd_head">
                        <h3>OUR TRADE SERVICES ARE HERE FOR YOU
                </h3>
                        <div className="view-all">
                            <h5>Customization Service</h5>
                            <img src={arrowRight} alt="right_icon" />
                        </div>
                    </div>
                    <div className="quotation__request">
                        <div className="request_img">

                        </div>

                        <div className="request_form">
                            <div className="request_form-head">
                                <div className="request_form-head__title">One Request, Multiple Quotes</div>
                                <div className="request_form-head__desc">"Custom Hang Tags For Clothes PAYONEER USER ONLY" from
                            C***** received 3 quotation(s)</div>
                                <form action="">
                                    <div className="input-temp">
                                        <label className="search-lbl" htmlFor="search">Search</label>
                                        <input className="search-inp" type="text" name="search" 
                                            placeholder="Placeholder" />
                                    </div>
                                    <div className="input-temp">
                                        <label className="search-lbl" htmlFor="search">Quantity</label>
                                        <input className="search-inp" type="text" name="search" 
                                            placeholder="Placeholder" />
                                    </div>
                                    <button className="btn-big full">
                                        <span>Request For Quotation</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* UPDATE SECTION */}

            <section className="update">
                <div className="update_container">
                    <div className="update-text">
                        <span>Get The Lastest Updates</span>
                    </div>
                    <div className="update_input">
                        <input type="text" name="" id="" placeholder="Enter your email address" />
                        <button className="update_btn">Get Updates</button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}

            <footer id="footer">
                <div className="footer_container">
                    <div className="footer-1">
                        <div className="footer-1__left">
                            <a href="/"><img className="logo_white" src={logoWhite} alt="your_logo" /></a>
                        </div>
                        <div className="call-us">
                            <div className="call-us__icon">
                                <img src="./assets/icon/support.svg" alt="" />
                            </div>
                            <div className="call-us__text">
                                <span>Call us 24/7</span>
                                <h3>+994 55 822 05 58 (USA)</h3>
                            </div>
                        </div>
                        <div className="contact">
                            <span>Contact info</span>
                            <h5>17 Princess Road, London, Greater London NW1 8JR, UK</h5>
                        </div>
                        <div className="buttons">
                            <div className="buttons_btn">
                                <div className="buttons_btn-icon">
                                    <img src={apple} alt="apple_logo" />
                                </div>
                                <div className="buttons_btn-txt">
                                    <span className="btn-text__title">Download on the</span>
                                    <span className="btn-text__disc">App Store</span>
                                </div>
                            </div>
                            <div className="buttons_btn">
                                <div className="buttons_btn-icon">
                                    <img src={google} alt="google-play" />
                                </div>
                                <div className="buttons_btn-txt">
                                    <span className="btn-text__title">Download on the</span>
                                    <span className="btn-text__disc">Google play</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-1__right">
                        <div className="f1-r__categories">
                            <h4 className="footer_site-map">Categories</h4>
                            <div className="categories_container">
                                <ul>
                                    <li><a href="/">Consumer Electronics</a></li>
                                    <li><a href="/">Apparel</a></li>
                                    <li><a href="/">Vehicles & Accessories</a></li>
                                    <li><a href="/">Sports & Entertainment</a></li>
                                    <li><a href="/">Machinery</a></li>
                                    <li><a href="/">Home & Garden</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/">Beauty & Personal Care</a></li>
                                    <li><a href="/">Car Electronic & GPS</a></li>
                                    <li><a href="/">Cameras & Photography</a></li>
                                    <li><a href="/">Gadgets</a></li>
                                    <li><a href="/">Accesories</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="f1-r__customer-services">
                            <h4 className="footer_site-map">Customer Services</h4>
                            <div className="categories_container">
                                <ul>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Contact us</a></li>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Help me</a></li>
                                    <li><a href="/">Site map</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            <footer className="footer-2">
                <div className="footer-2__container">
                    <div className="copyright">
                        <h6><span>© 2020 Your Company Name</span> - All Rights Reserved</h6>
                    </div>
                    <div className="social-media">
                        <div className="social-media__container">
                            <img src={instagram} alt="instagram_icon" />
                        </div>
                        <div className="social-media__container">
                            <img src={facebook} alt="facebook_icon" />
                        </div>
                        <div className="social-media__container">
                            <img src={linkedin} alt="linkedin_icon" />
                        </div>
                        <div className="social-media__container">
                            <img src={twitter} alt="twitter_icon" />
                        </div>
                    </div>
                    <div className="terms-conditions">
                        <ul>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{
        data: state.logIn.user
    }

}

export default connect(mapStateToProps)(Temporary);