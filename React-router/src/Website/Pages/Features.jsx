import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

function Features() {
  return (
    <div>
        <Header/>
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
                <Footer/>
    </div>
  )
}

export default Features