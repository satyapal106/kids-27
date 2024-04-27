import React from 'react'

function SelectNavbar() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const params = JSON.parse(localStorage.getItem('params'));
    const branchData = JSON.parse(localStorage.getItem('branchData'));
    function logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('subjectId');
        window.location.href = `/branch/${params?.branch_url}/${params?.url}`

    }
    return (
        <>
            <header>
                <div className="header-top">
                    <div className="container-fluid">
                        <div className="ht-area">
                            <ul className="left">
                                <li>
                                    <span>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                    </span>{" "}
                                    Phone : +91 98894****
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
                                            // src="/loader.gif"
                                            src={`https://project.digitalnawab.com/kidsschool/${branchData?.logo}`}
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
                                        <li>
                                            <a
                                                href="/"
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
                                                data-toggle="dropdown"
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
                                            currentUser.user_type === 'student' ? ('') : (<><li>
                                                <a href={`/branch/${params.branch_url}/${params.url}/select-class`}>Classes</a>
                                            </li></>)
                                        }
                                        {
                                            currentUser ? (<li>
                                                <a onClick={logout} style={{ cursor: "pointer" }}>Logout</a>
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


        </>
    )
}

export default SelectNavbar