import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

function Home() {
    return (
        <div>
            <Helmet>
                <script type="text/javascript" src="Website/js/jquery-2.1.1.js"></script>
                <script type="text/javascript" src="Website/js/bootstrap.min.js"></script>
                <script type="text/javascript" src="Website/js/plugins.js"></script>
                <script type="text/javascript" src="Website/js/menu.js"></script>
                <script type="text/javascript" src="Website/js/custom.js"></script>
                <script src="Website/js/jquery.subscribe.js"></script>
            </Helmet>

            <Header />
            <div className="main app form" id="main">
                <div className="hero-section">
                    <div className="container nopadding">
                        <div className="col-md-5"> <img className="img-responsive wow fadeInUp" data-wow-delay="0.1s" src="Website/images/app-signup.png" alt="App" /> </div>
                        <div className="col-md-7">
                            <div className="hero-content">
                                <h1 className="wow fadeInUp" data-wow-delay="0.1s">Landing Page for Apple Watch</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.2s"> Beoplay A1 bluetooth speakers image on the left is owned by
                                    Bang and Olufsen and is released under creative
                                    commons lisence. </p>
                                <div className="sub-form wow fadeInUp" data-wow-delay="0.3s">
                                    <form className="subscribe-form wow zoomIn" action="php/subscribe.php" method="post" name="subscribeform" id="subscribeform">
                                        <input className="mail" type="email" name="email" placeholder="Join the wait list" autoComplete="off" id="subemail" />
                                        <input className="submit-button" type="submit" defaultValue="Subscribe" name="send" id="subsubmit" />
                                    </form>
                                    <div id="mesaj" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Client Section */}
                <div className="client-section">
                    <div className="container text-center">
                        <div className="clients owl-carousel owl-them">
                            <div className="single"> <img src="Website/images/client1.png" alt="Image" /> </div>
                            <div className="single"> <img src="Website/images/client1.png" alt="Image" /> </div>
                            <div className="single"> <img src="Website/images/client3.png" alt="Image" /> </div>
                            <div className="single"> <img src="Website/images/client1.png" alt="Image" /> </div>
                            <div className="single"> <img src="Website/images/client2.png" alt="Image" /> </div>
                            <div className="single"> <img src="Website/images/client3.png" alt="Image" /> </div>
                        </div>
                    </div>
                </div>
                <div className="app-features text-center" id="features">
                    <div className="container">
                        <h1 className="wow fadeInDown" data-wow-delay="0.1s">Features &amp; Overviews</h1>
                        <p className="wow fadeInDown" data-wow-delay="0.2s"> Aliquam sagittis ligula et sem lacinia, ut facilisis enim
                            sollicitudin. Proin nisi est,<br className="hidden-xs" />
                            convallis nec purus vitae, iaculis posuere sapien. </p>
                        <div className="col-md-4 features-left">
                            <div className="col-md-12 wow fadeInDown" data-wow-delay="0.2s">
                                <div className="icon"> <i className="ion-ios-analytics-outline" /> </div>
                                <div className="feature-single">
                                    <h1>Lorem Ipsum</h1>
                                    <p> Some lorem contetnt to fill the gap and make it look clean and organized. </p>
                                </div>
                            </div>
                            <div className="col-md-12 wow fadeInDown" data-wow-delay="0.3s">
                                <div className="icon"> <i className="ion-ios-briefcase-outline" /> </div>
                                <div className="feature-single">
                                    <h1>Lorem Ipsum</h1>
                                    <p> Some lorem contetnt to fill the gap and make it look clean and organized. </p>
                                </div>
                            </div>
                            <div className="col-md-12 wow fadeInDown" data-wow-delay="0.4s">
                                <div className="icon"> <i className="ion-ios-chatboxes-outline" /> </div>
                                <div className="feature-single">
                                    <h1>Lorem Ipsum</h1>
                                    <p> Some lorem contetnt to fill the gap and make it look clean and organized. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInDown" data-wow-delay="0.5s"> <img className="img-responsive" src="Website/images/iPhone-app.png" alt="App" /> </div>
                        <div className="col-md-4 features-left">
                            <div className="col-md-12 wow fadeInDown" data-wow-delay="0.6s">
                                <div className="icon"> <i className="ion-ios-cloud-download-outline" /> </div>
                                <div className="feature-single">
                                    <h1>Lorem Ipsum</h1>
                                    <p> Some lorem contetnt to fill the gap and make it look clean and organized. </p>
                                </div>
                            </div>
                            <div className="col-md-12 wow fadeInDown" data-wow-delay="0.7s">
                                <div className="icon"> <i className="ion-ios-copy-outline" /> </div>
                                <div className="feature-single">
                                    <h1>Lorem Ipsum</h1>
                                    <p> Some lorem contetnt to fill the gap and make it look clean and organized. </p>
                                </div>
                            </div>
                            <div className="col-md-12 wow fadeInDown" data-wow-delay="0.8s">
                                <div className="icon"> <i className="ion-ios-game-controller-b-outline" /> </div>
                                <div className="feature-single">
                                    <h1>Lorem Ipsum</h1>
                                    <p> Some lorem contetnt to fill the gap and make it look clean and organized. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split-features">
                    <div className="col-md-6 nopadding">
                        <div className="split-image"> <img className="img-responsive wow fadeIn" src="Website/images/app_image.png" alt="Image" />
                        </div>
                    </div>
                    <div className="col-md-6 nopadding">
                        <div className="split-content">
                            <h1 className="wow fadeInUp">Designed for effective product landing page</h1>
                            <p className="wow fadeInUp"> Pellentesque eget dolor gravida, tempus purus ac, ultricies mauris. Etiam est nisl,
                                molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus
                                malesuada mi.</p>
                            <ul className="wow fadeInUp">
                                <li>Nulla ornare purus non consequat ultricies.</li>
                                <li>Etiam est nisl, molestie sed egestas bibendum</li>
                                <li>Aliquam vel euismod elit, sed suscipit est.</li>
                                <li>Curabitur egestas justo neque viverra vel. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="split-features2">
                    <div className="col-md-6 nopadding">
                        <div className="split-content second">
                            <h1 className="wow fadeInUp">The best way to show your product to the world</h1>
                            <p className="wow fadeInUp"> Pellentesque eget dolor gravida, tempus purus ac, ultricies mauris. Etiam est nisl,
                                molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit amet dolor in, rhoncus
                                malesuada mi.</p>
                            <ul className="wow fadeInUp">
                                <li>Nulla ornare purus non consequat ultricies.</li>
                                <li>Etiam est nisl, molestie sed egestas bibendum</li>
                                <li>Aliquam vel euismod elit, sed suscipit est.</li>
                                <li>Curabitur egestas justo neque viverra vel. </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 nopadding">
                        <div className="split-image"> <img className="img-responsive wow fadeIn" src="Website/images/app_image2.png" alt="Image" />
                        </div>
                    </div>
                </div>
                <div className="pitch text-center">
                    <div className="container">
                        <div className="pitch-intro">
                            <h1 className="wow fadeInDown" data-wow-delay="0.2s">More Awesome Features</h1>
                            <p className="wow fadeInDown" data-wow-delay="0.2s"> Pellentesque eget dolor gravida, tempus purus ac, ultricies
                                mauris. Etiam est nisl, molestie sed egestas bibendum, varius eu diam. Suspendisse est metus, ultrices sit
                                amet dolor in, rhoncus malesuada mi.</p>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                                <div className="pitch-icon"> <i className="ion-ios-checkmark-outline" /> </div>
                                <div className="pitch-content">
                                    <h1>Great Options</h1>
                                    <p> Aliquam vel euismod elit, sed suscipit est. Sed tincidunt venenatis ligula ac luctus. Fusce egestas
                                        volutpat mi sed pellentesque. </p>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                                <div className="pitch-icon"> <i className="ion-ios-mic-outline" /> </div>
                                <div className="pitch-content">
                                    <h1>Voice Callings</h1>
                                    <p> Aliquam vel euismod elit, sed suscipit est. Sed tincidunt venenatis ligula ac luctus. Fusce egestas
                                        volutpat mi sed pellentesque. </p>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.2s">
                                <div className="pitch-icon"> <i className="ion-ios-folder-outline" /> </div>
                                <div className="pitch-content">
                                    <h1>Sharing Files</h1>
                                    <p> Aliquam vel euismod elit, sed suscipit est. Sed tincidunt venenatis ligula ac luctus. Fusce egestas
                                        volutpat mi sed pellentesque. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-sub">
                    <div className="container">
                        <div className="sub-inner">
                            <h1 className="wow fadeInUp">Creative Landing App For Your Easy Life! Simple Reliable &amp; Understandable for your
                                customers </h1>
                            <a href="#" className="btn btn-action wow fadeInUp">Buy now</a>
                        </div>
                    </div>
                </div>
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
                <div id="pricing" className="pricing-section text-center">
                    <div className="container">
                        <div className="col-md-12 col-sm-12 nopadding">
                            <div className="pricing-intro">
                                <h1 className="wow fadeInUp" data-wow-delay="0s">Easy Pricing Plans</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.2s"> Lorem ipsum dolor sit. Incidunt laborum beatae earum nihil
                                    odio consequatur officiis <br className="hidden-xs" />tempore consequuntur officia ducimus unde doloribus quod
                                    unt repell </p>
                            </div>
                            <div className="col-sm-4">
                                <div className="table-left wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="icon"> <i className="ion-ios-paperplane-outline" /> </div>
                                    <div className="pricing-details">
                                        <h2>Starter Plan</h2>
                                        <span>Free</span>
                                        <ul>
                                            <li>Consectetur adipiscing</li>
                                            <li>Nunc luctus nulla et tellus</li>
                                            <li>Suspendisse quis metus</li>
                                            <li>Vestibul varius fermentum erat</li>
                                        </ul>
                                        <button className="btn btn-primary btn-action btn-fill">Get Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="table-right table-center wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon"> <i className="ion-ios-analytics-outline" /> </div>
                                    <div className="pricing-details">
                                        <h2>Popular Plan</h2>
                                        <span>$3.99</span>
                                        <ul>
                                            <li>Consectetur adipiscing</li>
                                            <li>Nunc luctus nulla et tellus</li>
                                            <li>Suspendisse quis metus</li>
                                            <li>Vestibul varius fermentum erat</li>
                                        </ul>
                                        <button className="btn btn-primary btn-action btn-fill">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="table-right wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon"> <i className="ion-ios-color-wand-outline" /> </div>
                                    <div className="pricing-details">
                                        <h2>Premium Plan</h2>
                                        <span>$9.50</span>
                                        <ul>
                                            <li>Consectetur adipiscing</li>
                                            <li>Nunc luctus nulla et tellus</li>
                                            <li>Suspendisse quis metus</li>
                                            <li>Vestibul varius fermentum erat</li>
                                        </ul>
                                        <button className="btn btn-primary btn-action btn-fill">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cta-sub no-color">
                    <div className="container">
                        <div className="cta-inner">
                            <h1 className="wow fadeInUp" data-wow-delay="0s">Sign Up to Our Newsletter and get exciting offers</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.2s"> Enter your email address we promise, never disclose<br className="hidden-xs" />
                                or sell your email address. </p>
                            <div className="form wow fadeInUp" data-wow-delay="0.3s">
                                <form className="subscribe-form center-form wow zoomIn" action="php/subscribe.php" method="post" name="subscribeform" id="subscribeform">
                                    <input className="mail" type="email" name="email" placeholder="Join the wait list" autoComplete="off" id="subemail" />
                                    <input className="submit-button" type="submit" defaultValue="Subscribe" name="send" id="subsubmit" />
                                </form>

                                <div id="mesaj" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>


    )
}

export default Home