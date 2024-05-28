import React from 'react'
import Aheader from './Aheader'
import { Helmet } from 'react-helmet'

function Dashboard() {
  return (
    <div>
        <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </Helmet>
        <Aheader/>
          {/* About Start */}
          <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-5 pb-lg-0">
                            <img className="img-fluid w-100" src="website/images/app-signup.png" alt />
                        </div>
                        <div className="col-lg-6">
                            <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Us</h6>
                            <h1 className="mb-4">Sell more useless stuff faster!</h1>
                            <p className="pl-4 border-left border-primary">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et erat</p>
                            <div className="row pt-3">
                                <div className="col-6">
                                    <div className="bg-light text-center p-4">
                                        <h3 className="display-4 text-primary" data-toggle="counter-up">99</h3>
                                        <h6 className="text-uppercase">Spa Specialist</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-light text-center p-4">
                                        <h3 className="display-4 text-primary" data-toggle="counter-up">999</h3>
                                        <h6 className="text-uppercase">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
    </div>
  )
}

export default Dashboard