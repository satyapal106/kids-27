import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer-images">
                <div
                    id="rainbow"
                    className="animated activate bounceInLeft"
                    data-fx="bounceInLeft"
                >

                </div>
                <div id="wave3" style={{ backgroundPosition: "-74.2px 0px" }} />
                <div id="wave2" style={{ backgroundPosition: "72px 0px" }} />
                <div id="boat" className="animated activate fadeInUp" data-fx="fadeInUp">
                    <img src="/images/boat.png" alt="boat image" />
                </div>
                <div id="wave1" style={{ backgroundPosition: "-67px 0px" }} />
            </div>
            <footer className="type1">
                <div id="fish1" />
                <div id="fish2" />
                <div className="container">

                    <div className="row">
                        <div className='col-lg-6 col-md-6'>

                        <img style={{ marginLeft: "125px" }} src="/images/acev.png" width="400px" alt=""
                                                        
                        />
                        </div>
                        <div className='col-lg-6 col-md-6'>

                            <img src="/images/tree.webp" width="320px" alt="" style={{marginleft:"12px" , marginTop:"-34px"}}/>
                        </div>


                    </div>
                </div>
            </footer>



        </>
    )
}

export default Footer