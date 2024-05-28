import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

function Pricing() {
  return (
    <div>
        <Header/>
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
                <Footer/>
    </div>
  )
}

export default Pricing