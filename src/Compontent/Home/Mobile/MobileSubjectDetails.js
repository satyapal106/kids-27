import React from 'react'
import VideoPlayer from '../VideoPlayer'
import './menu.css'

function MobileSubjectDetails() {
  return (
    <>
      <div id="page">
        <div id="footer-bar" className="footer-bar-1">
          <a href="/" className="active-nav"><i class="fa fa-home"></i><span>Home</span></a>
          <a href="/"><i className="fa fa-user"></i><span>Login</span></a>
          <a href="/"><i className="fa fa-cog"></i><span>Menu</span></a>
        </div>
        <div className="page-content header-clear-small">
          <div className="logo-row-mobile">
            <img src="images/logo2.gif" alt="logo" className="logo-mobile" />
          </div>
        </div>
        <div className="card-overlay bg-gradient">
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-6 col-6'>
                <img className="img-fluid banner-mobile" src="images/acev.png" width={800} />
              </div>
              <div className='col-md-6 col-sm-6 col-6'>
                <img className="img-fluid banner-mobile" width={100} src="images/tree.webp" style={{ marginLeft: "30px" }} />
              </div>

            </div>
          </div>

        </div>
        <div className="page-content header-clear-medium">
          <div className="card card-style">
            <div
              className="card card-style mx-0 rounded-0 mb-0 preload-img entered loaded"
              data-src="images/pictures/21w.jpg"
              data-card-height={200}
              data-ll-status="loaded"
              style={{ height: 200, backgroundImage: 'url("images/pictures/21w.jpg")' }}
            >
              <div className="image">
                <VideoPlayer />
              </div>

              <div className="card-overlay bg-gradient rounded-0" />
            </div>
            <ul className="schedule">
              <li>
                <span>Flip Book</span>
              </li>
              <li>
                <span>Video</span>
              </li>
              <li>
                <span>E-book </span>
              </li>
              <li>
                <span>Youtube</span>
              </li>
            </ul>

            <div className="content classes">
              <h4 className='text-center'><a href="">Chapter 1 Our Body </a> </h4>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta facere reprehenderit repellendus, maiores distinctio nostrum</p>








              <br />
            </div>
          </div>
          <div className="card card-style">
            <div
              className="card card-style mx-0 rounded-0 mb-0 preload-img entered loaded"
              data-src="images/pictures/21w.jpg"
              data-card-height={200}
              data-ll-status="loaded"
              style={{ height: 200, backgroundImage: 'url("images/pictures/21w.jpg")' }}
            >
              <div className="image">
                <VideoPlayer />
              </div>

              <div className="card-overlay bg-gradient rounded-0" />
            </div>
            <ul className="schedule">
              <li>
                <span>Flip Book</span>
              </li>
              <li>
                <span>Video</span>
              </li>
              <li>
                <span>E-book </span>
              </li>
              <li>
                <span>Youtube</span>
              </li>
              <li>
                <span>TRM</span>
              </li>
              <li>
                <span style={{ fontSize: "12px" }}> <a href="http://test.acevisionpublishers.com/login.html" style={{color:"white"}}>Test Genrator </a>  </span>
              </li>
            </ul>

            <div className="content classes">
              <h4 className='text-center'><a href="">Chapter 1 Our Body </a> </h4>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta facere reprehenderit repellendus, maiores distinctio nostrum</p>








              <br />
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default MobileSubjectDetails