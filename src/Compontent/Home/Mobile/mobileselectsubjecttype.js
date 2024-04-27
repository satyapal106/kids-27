import React from 'react'

function mobileselectsubjecttype() {
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
                <div className="card-overlay bg-gradient p-2" >
                    <img className="img-fluid banner-mobile" src="images/kidsmobile.png" />
                </div>
                <div className='page-content'>
                    <div className='contents'>

                        <div className="row mt-4">
                            <a href="/mobile-subject-detail" className="col-6 p-0">
                                <div
                                    className="card card-style me-2 mb-3 gradient-subject"
                                    data-card-height={100}
                                    style={{ height: 100 }}
                                >

                                    <div className="card-top">

                                    </div>
                                    <div className="card-bottom">

                                        <h4 className="color-whites py-2 px-3">English</h4>
                                    </div>
                                    <img className='color-whites selectsubjectsize py-2 px-3' src="https://kids.digitalnawab.com/images/subject/english.png" alt="" />
                                </div>
                            </a>
                            <a href="#" className="col-6 p-0">
                                <div
                                    className="card card-style me-2 mb-3 gradient-subjects "
                                    data-card-height={100}
                                    style={{ height: 100 }}
                                >
                                    <div className="card-top">

                                    </div>
                                    <div className="card-bottom">
                                        <h4 className="color-whites py-2 px-3"> Hindi</h4>
                                    </div>
                                    <img className='color-whites selectsubjectsize py-2 px-3' src="https://kids.digitalnawab.com/images/subject/english.png" alt="" />
                                </div>
                            </a>
                            <a href="#" className="col-6 p-0">
                                <div
                                    className="card card-style me-2 mb-3 gradient-subjects "
                                    data-card-height={100}
                                    style={{ height: 100 }}
                                >
                                    <div className="card-top">

                                    </div>
                                    <div className="card-bottom">
                                        <h4 className="color-whites py-2 px-3"> Math</h4>
                                    </div>
                                    <img className='color-whites selectsubjectsize py-2 px-3' src="https://kids.digitalnawab.com/images/subject/english.png" alt="" />
                                </div>
                            </a>
                            <a href="#" className="col-6 p-0">
                                <div
                                    className="card card-style me-2 mb-3 gradient-subjects "
                                    data-card-height={100}
                                    style={{ height: 100 }}
                                >
                                    <div className="card-top">

                                    </div>
                                    <div className="card-bottom">
                                        <h4 className="color-whites py-2 px-3"> Science</h4>
                                    </div>
                                    <img className='color-whites selectsubjectsize py-2 px-3' src="https://kids.digitalnawab.com/images/subject/english.png" alt="" />
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default mobileselectsubjecttype