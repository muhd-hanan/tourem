import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu';
import MobileMenu from './MobileMenu';

function HeaderThree() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header className="th-header header-layout3 header-absolute">
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-xl-block">
                                        
                                        <ul>
                                            <li>
                                                 <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img src="/assets/img/logo-white2.png" style={{ width: "100px" }}  alt="Tourm" />
                                        </Link>
                                    </div>
                                </div>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link className="active" to="/">
                                                    Home
                                                </Link>
                                                <ul className="mega-menu mega-menu-content ">
                                                    <li>
                                                        <div className="container">
                                                            <div className="row gy-4">
                                                                <div className="col-lg-4">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-travel.jpg"
                                                                                alt="Home One"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link

                                                                                    to="/"
                                                                                    className="th-btn"
                                                                                >
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link to="/">
                                                                                <span>01.</span>Home Travel
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-tour.jpg"
                                                                                alt="Home Two"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link

                                                                                    to="/home-tour"
                                                                                    className="th-btn "
                                                                                >
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link to="/home-tour">
                                                                                <span>02.</span>Home Tour
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="mega-menu-box">
                                                                        <div className="mega-menu-img">
                                                                            <img
                                                                                src="/assets/img/pages/home-agency.jpg"
                                                                                alt="Home Three"
                                                                            />
                                                                            <div className="btn-wrap">
                                                                                <Link

                                                                                    to="/home-agency"
                                                                                    className="th-btn "
                                                                                >
                                                                                    View Demo
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="mega-menu-title">
                                                                            <Link to="/home-agency">
                                                                                <span>03.</span>Home Agency
                                                                            </Link>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li className="">
                                                <Link to="#">Global Visa</Link>
                                               
                                            </li>
                                            <li className="">
                                                <Link to="#">Holiday Packages</Link>
                                               
                                            </li>
                                            
                                             <li>
                                                <Link to="/contact">Contact us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                               
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-xl-block">
                                        <ul>
                                            
                                          
                                           
                                           
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    >
                                        <i className="far fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-right-button">
                            <button
                                type="button"
                                className="simple-btn sideMenuToggler"
                                onClick={() => setIsSideMenuOpen(true)}
                            >
                                <img src="/assets/img/icon/menu.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        </>
    )
}

export default HeaderThree
