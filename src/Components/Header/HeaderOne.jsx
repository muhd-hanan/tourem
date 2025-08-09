import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NiceSelect from './NiceSelect';
import MobileMenu from './MobileMenu';
import LoginForm from './LoginForm';

function HeaderOne() {
    const languageOptions = [
        { value: "language", label: "Language" },
        { value: "CNY", label: "CNY" },
        { value: "EUR", label: "EUR" },
        { value: "AUD", label: "AUD" },
    ];
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

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
            {/*============================== Header Area ==============================*/}
            <header className="th-header header-layout1">
            
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area">
                        <div className="container th-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img src="/assets/img/logo-white2.png"  style={{ width: "100px", marginLeft:"5%" }} alt="Tourm" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto ">
                                    <nav className="main-menu d-none d-xl-inline-block">
                                        <ul>
                                            <li className="menu-item-has-children mega-menu-wrap">
                                                <Link className="active" to="/">
                                                    Home
                                                </Link>
                                                <ul className="mega-menu mega-menu-content">
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
                                                                                <span>02.</span>All Services
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
                                                                                <span>03.</span>Testimonial
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
                                            <li className="menu-item-has-children">
                                                <Link to="#">Holiday Packages</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/destination">Holiday </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/destination/1">
                                                            Destination Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Global Visa</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/service">Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/service/1">Service Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                           
                                           
                                            <li>
                                                <Link to="/contact">Contact us</Link>
                                            </li>
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
                                <div className="col-auto d-none d-xl-block">
                                    <div className="header-button">
                                        <Link to="/contact" className="th-btn style3 th-icon">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="logo-bg bg-mask"
                            style={{
                                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                                maskImage: "url(/assets/img/logo_bg_mask.png)"
                            }} />
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <LoginForm isOpen={isLoginFormOpen} onClose={() => setIsLoginFormOpen(false)} />
        </>

    )
}

export default HeaderOne
