import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Navbar({ login }) {
    AOS.init();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const panams = JSON.parse(localStorage.getItem('params'))
    const branchdata = JSON.parse(localStorage.getItem('branchData'))

    return (
        <>

            {

                localStorage.getItem('currentUser') ? (window.location.href = `/branch/${panams.branch_url}/${panams.url}/select-subject/`) : (<>
                    <header>
                        <div className="header-top">
                            <div className="container-fluid">
                                <div className="ht-area">
                                    <ul className="left">
                                        <li>
                                            <span>
                                                <i className="fa fa-phone" aria-hidden="true" />
                                            </span>{" "}
                                            Phone : +91 984516****
                                        </li>
                                    </ul>
                                    <ul className="right">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-behance" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-dribbble" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-skype" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-vimeo" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-pinterest" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-rss" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="main-menu">
                            <div className="container-fluid">
                                <div className="row no-gutters">
                                    <nav className="main-menu-area w-100">
                                        <div className="logo-area">
                                            <a className="" href="/">
                                                <img
                                                    // src="/images/logo2.gif"
                                                    src={`https://project.digitalnawab.com/kidsschool/${branchdata?.logo}`}
                                                    alt="logo"
                                                    className="img-responsive"
                                                />
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
                                        <div className="menu-area">
                                            <ul className="menu">
                                                <li className="dropdown">
                                                    <a
                                                        href="#"
                                                        className="dropdown-toggle"
                                                        data-toggle="dropdown"
                                                        role="button"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Home <span className="caret" />
                                                    </a>
                                                </li>
                                                <li className="dropdown">
                                                    <a
                                                        href="#"
                                                        className="dropdown-toggle"
                                                        data-toggle=""
                                                        role="button"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        About <span className="caret" />
                                                    </a>

                                                </li>

                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>

                                                {
                                                    currentUser ? (<li>
                                                        <a href="contact.html">Logout</a>
                                                    </li>) : ""

                                                }
                                            </ul>
                                            <form className="menu-search-form">
                                                <input type="text" name="search" placeholder="Search here..." />
                                                <span className="menu-search-close">
                                                    <i className="fa fa-times" aria-hidden="true" />
                                                </span>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="banner section-notch">

                        <div className="main-banner-shape">
                            <div className="shape-2">
                                <img src="/images/banner-shape-2.png" alt="image" />
                            </div>
                            <div className="shape-3">
                                <img src="/images/banner-shape-3.png" alt="image" />
                            </div>
                            <div className="shape-4">
                                <img src="/images/banner-shape-4.png" alt="image" />
                            </div>
                        </div>
                    </section>
                    <div className='contianer-fluid'>
                        {/* brid */}
                        <section id="callout" className="small-section">
                            {/* Clouds background */}
                            <div className="containers">

                                <div className="bird-container bird-container--one">
                                    <div className="bird bird--one" />
                                </div>
                                <div className="bird-container bird-container--two">
                                    <div className="bird bird--two" />
                                </div>
                                <div className="bird-container bird-container--three">
                                    <div className="bird bird--three" />
                                </div>
                                <div className="bird-container bird-container--four">
                                    <div className="bird bird--four" />
                                </div>
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="cloud x1" />
                                <div className="cloud x2" />
                                <div className="cloud x3" />
                                {/* <div className="cloud x4" /> */}
                                {/* <div className="cloud x5" /> */}
                                {/* <div className="cloud x6" /> */}

                            </div>
                            {/* /Clouds ends */}
                            <div className="container">
                                {/* Animated Sun */}
                                <div className="sun d-none d-lg-block">
                                    <div className="sun-face">
                                        <div className="sun-hlight" />
                                        <div className="sun-leye" />
                                        <div className="sun-reye" />
                                        <div className="sun-lred" />
                                        <div className="sun-rred" />
                                        <div className="sun-smile" />
                                    </div>
                                    {/* Sun rays */}
                                    <div className="sun-anime">
                                        <div className="sun-ball" />
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                        <div className="sun-light">
                                            <b />
                                            <s />
                                        </div>
                                    </div>
                                </div>
                                {/* /Animated Sun */}

                                {/* /col-lg-6 */}
                            </div>
                            {/* /container*/}
                        </section>
                        <div className='row section-notch' style={{ marginTop: "-300px" }}>
                            <div className='col-lg-12 col-xs-12'>
                                <section className="about">
                                    <div className="overlay padding-120">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="about-image">
                                                        <div className="about-content">

                                                            <h3 className='text-center ' style={{ fontSize: "50px", marginTop: "-137px", marginRight: "160px" }}>Teacher </h3>

                                                        </div>
                                                        <img src="/images/home_image/teacher.png" className="rounded mx-auto d-block" alt="..." />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="about-image">
                                                        <div className="about-content">
                                                            <h3 className='text-center ' style={{ fontSize: "50px", marginTop: "-137px", marginRight: "160px" }}>Student </h3>
                                                        </div>

                                                        <img src="/images/home_image/student.png" className="rounded mx-auto d-block img-responsive students" alt="..." />

                                                    </div>
                                                </div>


                                                <div className="text-center ">
                                                    <div className="about-content" style={{display:"flex",justifyContent:"center"}}>

                                                        <ul className='text-center studentText'>
                                                            <li>
                                                                <a href={`/branch/${login.branch_url}/${login.url}/signup`} className="button-default">
                                                                    SING UP
                                                                </a>
                                                            </li>


                                                            <li>
                                                                <a href={`/branch/${login.branch_url}/${login.url}/login`} className="button-default">
                                                                    SIGN IN
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </section>


                            </div>




                        </div>


                    </div></>)
            }
        </>
    )
}
export default Navbar;