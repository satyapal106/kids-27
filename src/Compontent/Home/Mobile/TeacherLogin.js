import React from 'react';
import './TeacherLogin.css'

function TeacherLogin() {
  const params = JSON.parse(localStorage.getItem('params'));
  return (
    <>
      <div id="page">
        <div id="footer-bar" className="footer-bar-1">
          <a href="/" className="active-nav"><i className="fa fa-home"></i><span>Home</span></a>
          <a href="/"><i className="fa fa-user"></i><span>Login</span></a>
          <a href="/"><i className="fa fa-cog"></i><span>Menu</span></a>

        </div>

        <div className="page-content header-clear-small">
          <div className="logo-row-mobile">
            <img src="/images/logo2.gif" alt="logo" className="logo-mobile" />
          </div>
        </div>
        <div className="page-content header-clear-medium">
          <div className="card card-style">
            <div
              data-card-height={200}
              className="card shadow-l mb-0 bg-18"
              style={{ height: "220px" }}
            >

              <div className="card-overlay bg-gradient opacity-90 rounded-0" />
            </div>
            <div className="contents p-2">

              <a
                href={`/branch/${params.branch_url}/${params.url}/teacher-login`}
                data-menu="menu-login-1"
                className="float-end btn btn-s bg-highlight rounded-xl m-1  shadow-xl text-uppercase font-900 font-11 mt-2"
                style={{ width: "100px", color: "white", borderRadius: "35px !important " }}
              >
                SIGN IN
              </a>
              <a
               href={`/branch/${params.branch_url}/${params.url}/teacher-signup`}
                data-menu="menu-login-1"
                className="float-end btn btn-s bg-highlight rounded-xl m-1  shadow-xl text-uppercase font-900 font-11 mt-2"
                style={{ width: "100px", color: "white", borderRadius: "35px !important " }}
              >
                SIGN UP
              </a>
            </div>
          </div>

          <div className="card card-style">
            <div
              data-card-height={200}
              className="card shadow-l mb-0 bg-17"
              style={{ height: 200 }}
            >

              <div className="card-overlay bg-gradient opacity-90 rounded-0" />
            </div>
            <div className="contents p-2 text-center">

              <a
                href='/teacher-login'
                data-menu="menu-login-1"
                className="float-end btn btn-s  rounded-xl m-1  shadow-xl text-uppercase font-900 font-11 mt-2"
                style={{ width: "100px", backgroundColor: "#1877f2", color: "white" }}
              >
                SIGN UP
              </a>
              <a
                href='/teacher-login'
                data-menu="menu-login-1"
                className="float-end btn btn-s  rounded-xl m-1  shadow-xl text-uppercase font-900 font-11 mt-2"
                style={{ width: "100px", backgroundColor: "#1877f2", color: "white" }}
              >
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default TeacherLogin