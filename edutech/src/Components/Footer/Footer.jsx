import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer fullwidth">
            {/* Site footer */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-6">
                            <address itemscope itemtype="https://schema.org/Organization">
                                <h6 itemprop="name">Resonance Eduventures Limited</h6>
                                <p className="text-justify address-links" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                                    <b>Corp. / Reg. Office :</b><br />
                                    <a href="https://www.google.com/maps?cid=4322130863468948029" target="_blank" itemprop="streetAddress">
                                        <i className="fas fa-map-marker-alt"></i> CG Tower, A-46 & 52, IPIA, Near City Mall<br />
                                        Jhalawar Road, Kota (Rajasthan), India 324005<br />
                                    </a>
                                    <b itemprop="telephone"><i className="fas fa-phone-volume"></i> Phone:</b> <a href="tel:07442777777">+91-744-2777777</a>, <a href="tel:07442777700">2777700</a><br />
                                    <b itemprop="email"><i className="fas fa-mail-bulk"></i> Email:</b> <a href="mailto:contact@resonance.ac.in">contact@resonance.ac.in</a><br />
                                    <b><i className="fas fa-fax"></i> Fax No.:</b> <a href="fax:02239167222">+91-022-39167222</a><br />
                                    <b><i className="fab fa-whatsapp"></i> Whatsapp No. :</b> <a href="https://api.whatsapp.com/send?phone=917340010345" target="_blank">+91-7340010345</a>
                                </p>
                            </address>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="../form/contactus.aspx"><i className="far fa-hand-pointer"></i> Network Contact Information</a></li>
                                <li><a href="../studentzone/feedback.aspx"><i className="far fa-hand-pointer"></i> Feedback</a></li>
                                <li><a href="../form/termofservices.aspx"><i className="far fa-hand-pointer"></i> Terms of Service</a></li>
                                <li><a href="../form/privacy-policy.aspx"><i className="far fa-hand-pointer"></i> Privacy Policy</a></li>
                                <li><a href="../form/refund-cancellation.aspx"><i className="far fa-hand-pointer"></i> Refund & Cancellation Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-md-4 col-lg-3 text-center">
                            <a href="http://edushoppee.com" target="_blank">
                                <img src="../webimages/edushoppee-logo-2023-v1.png" className="img-fluid" alt="Edushoppee" title="Edushoppee" style={{marginTop: '20px'}} />
                            </a>
                            <a href="../institutional-partnership/">
                                <img src="../webimages/institutional-partnership-2023-v1.png" className="img-fluid" alt="Institutional-Partnership" title="Institutional-Partnership" style={{marginTop: '40px'}} />
                            </a>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row row-eq-height">
                        <div className="col-xs-12 col-sm-9 col-md-7 content-center">
                            <p className="copyright-text" style={{marginTop: '0px'}}>
                                COPYRIGHT (C) 2011 RESONANCE | CIN - U80302RJ2007PLC024029.
                            </p>
                        </div>

                        <div className="col-xs-12 col-sm-3 col-md-5">
                            <span itemscope itemtype="https://schema.org/Organization">
                                <link itemprop="url" href="https://www.resonance.ac.in" rel="" />
                                <ul className="social-icons">
                                    <li><a itemprop="sameAs" className="facebook" href="https://www.facebook.com/ResonanceEdu" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a itemprop="sameAs" className="twitter" href="http://www.twitter.com/ResonanceEdu" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a itemprop="sameAs" className="youtube" href="https://www.youtube.com/c/ResonanceEduventuresOfficial" target="_blank"><i className="fab fa-youtube"></i></a></li>
                                    <li><a itemprop="sameAs" className="linkedin" href="https://www.linkedin.com/company/resonance-eduventures-pvt-ltd/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a itemprop="sameAs" className="instagram" href="https://www.instagram.com/resonance_edu/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a itemprop="sameAs" className="googleplay" href="https://play.google.com/store/apps/developer?id=Resonance+-+JEE+Advanced,+JEE+Main,+NEET+etc." target="_blank"><i className="fab fa-google-play"></i></a></li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-block d-sm-none fixed-bottom mobilefooter">
                    <div className="row" style={{background: 'linear-gradient(to right,#bad53c,#bad53c)'}}>
                        <div className="col">
                            <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                <div className="top_bar_login m-auto">
                                    <div className="login_button pl-2 pr-2">
                                        <a href="../applyonline/apply-online.aspx"><i className="fas fa-address-card"></i> Apply Online</a>&nbsp;&nbsp;||&nbsp;&nbsp;<a href="../studentzone/fee-online-login.aspx"><i className="fas fa-rupee-sign" aria-hidden="true"></i> Pay Fee Online</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
