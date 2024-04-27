import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';
import { isMobile } from "react-device-detect";
import Menu from './Mobile/Menu';

function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {
                isMobile ? (



                    <>
                        <Menu />

                    </>) : (<>
                        <div>

                            <div id="loader-wrapper">
                                <div id="loader" />
                                <div className="loader-section section-left" />
                                <div className="loader-section section-right" />
                            </div>  
                            <div className="mobile-menu-area">
                                <div className="logo-area">
                                    <a className="logo" href="/">
                                        <img src="images/logo.png" alt="logo" className="img-responsive" />
                                    </a>
                                    <button
                                        type="button"
                                        className="navbar-toggle collapsed d-md-none"
                                        data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="mobile-menu">
                                    <ul className="m-menu">
                                        <li className="dropdown-submenu">
                                            <a href="#">Home</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="index.html">home style 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">home style 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">home style 3</a>
                                                </li>
                                                <li>
                                                    <a href="one-page.html">home Onepage</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href="#">About</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="about.html">About Style 1</a>
                                                </li>
                                                <li>
                                                    <a href="about-2.html">About Style 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href="#">Classes</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="classes.html">Classes</a>
                                                </li>
                                                <li>
                                                    <a href="class-single.html">Class Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href="#">Teachers</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="teachers.html">Teacher</a>
                                                </li>
                                                <li>
                                                    <a href="teacher-detail.html">Teacher Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href="#">Pages</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="gallery.html">Gallery</a>
                                                </li>
                                                <li>
                                                    <a href="gallery-2.html">Gallery 2</a>
                                                </li>
                                                <li>
                                                    <a href="event.html">Event</a>
                                                </li>
                                                <li>
                                                    <a href="event-single.html">Event Single</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href="#">Blog</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="blog.html">Blog Page</a>
                                                </li>
                                                <li>
                                                    <a href="single.html">Blog Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a href="#">Shop</a>
                                            <ul className="mobile-submenu">
                                                <li>
                                                    <a href="product.html">Product</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">Product Details</a>
                                                </li>
                                                <li>
                                                    <a href="shop-cart.html">Product Cart</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Navbar />
                            <Banner />
                            <Footer />





                        </div></>)

            }

        </>




    )
}

export default Home