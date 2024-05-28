import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

function Contact() {
  return (
    <div>
        <Header/>
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
                <Footer/>
    </div>
  )
}

export default Contact