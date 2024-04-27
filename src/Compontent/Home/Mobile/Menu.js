import React from 'react';
import { useParams } from 'react-router-dom';
import './menu.css'

function Menu() {
    const params = JSON.parse(localStorage.getItem('params'));
    return (
        <>
            <div id="page">
                <div id="loader-wrapper">
                    <div id="loader" />
                    <div className="loader-section section-left" />
                    <div className="loader-section section-right" />
                </div>


                <div id="footer-bar" className="footer-bar-1">
                    <a href="/" className="active-nav"><i class="fa fa-home"></i><span>Home</span></a>
                    <a href="/"><i className="fa fa-user"></i><span>Login</span></a>
                    <a href="/"><i className="fa fa-cog"></i><span>Menu</span></a>
                </div>
                <div className="page-content header-clear-small">
                    <div className="logo-row-mobile">
                        <img src="/images/logo2.gif" alt="logo" className="logo-mobile" />
                    </div>

                    <div className="card-overlay bg-gradient p-2" >
                        <img className="img-fluid banner-mobile" src="/images/kidsmobile.png" />
                    </div>
                </div>

                <div
                    className="page-content header-clear-medium"
                    style={{ transform: "translateX(0px)" }}
                >
                    <div className="row text-center mb-0">
                        <div data-menu="instant-1" className="col-6 pe-0">

                            <div data-card-height={250} className=" card card-style  opacity-80" style={{ height: 250 }}>                             
                                <a href={`/branch/${params.branch_url}/${params.url}/teacher`} className="card-bottom btn btn-s btn-full text-uppercase font-900 bg-highlight rounded-s me-2 ms-2 mb-2">Teacher</a>
                                <div class="card-style bg-red-dark"></div>

                            </div>
                        </div>
                        <div data-menu="instant-1" className="col-6 pe-0">
                            <div data-card-height={250} className="card card-style  opacity-80" style={{ height: 250 }}>

                                <a href= {`/branch/${params.branch_url}/${params.url}/teacher`} className="card-bottom btn btn-s btn-full text-uppercase font-900 bg-highlights rounded-s me-2 ms-2 mb-2">Student</a>
                                <div class="card-style bg-red-dark2"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Menu