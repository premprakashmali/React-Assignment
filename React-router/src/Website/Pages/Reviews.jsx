import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { Helmet } from 'react-helmet'

function Reviews() {
    return (
        <div>
            {/* <Helmet>
                <script type="text/javascript" src="Website/js/jquery-2.1.1.js"></script>
                <script type="text/javascript" src="Website/js/bootstrap.min.js"></script>
                <script type="text/javascript" src="Website/js/plugins.js"></script>
                <script type="text/javascript" src="Website/js/menu.js"></script>
                <script type="text/javascript" src="Website/js/custom.js"></script>
                <script src="Website/js/jquery.subscribe.js"></script>
            </Helmet> */}
            <Header />
            <div id="review-section" className="review-section">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="reviews owl-carousel owl-theme">
                            <div className="review-single"><img className="img-circle" src="Website/images/customer1.png" alt="Client Testimonoal" />
                                <div className="review-text wow fadeInUp" data-wow-delay="0.2s">
                                    <p>Morbi eget dictum enim. Praesent sed quam sit amet lorem tempor rhoncus. <br />In hac habitasse
                                        platea dictumst. Vivamus in accumsan ex</p>
                                    <h3>Johnathan Doe</h3>
                                    <h3>Marketing Head Matrix media</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="Website/images/customer2.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Morbi eget dictum enim. Praesent sed quam sit amet lorem tempor rhoncus. <br />In hac habitasse
                                        platea dictumst. Vivamus in accumsan ex</p>
                                    <h3>Oidila Matik</h3>
                                    <h3>President Lexo Inc</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="Website/images/customer3.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Morbi eget dictum enim. Praesent sed quam sit amet lorem tempor rhoncus. <br />In hac habitasse
                                        platea dictumst. Vivamus in accumsan ex</p>
                                    <h3>- Alex Dattilo</h3>
                                    <h3>CEO Optima Inc</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="Website/images/customer4.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Morbi eget dictum enim. Praesent sed quam sit amet lorem tempor rhoncus. <br />In hac habitasse
                                        platea dictumst. Vivamus in accumsan ex</p>
                                    <h3>- Robert Hammer</h3>
                                    <h3>design head Omega Corp</h3>
                                </div>
                            </div>
                            <div className="review-single"><img className="img-circle" src="Website/images/customer5.png" alt="Client Testimonoal" />
                                <div className="review-text">
                                    <p>Morbi eget dictum enim. Praesent sed quam sit amet lorem tempor rhoncus. <br />In hac habitasse
                                        platea dictumst. Vivamus in accumsan ex</p>
                                    <h3>- Rita Valentine</h3>
                                    <h3>CEO Behena digital</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reviews