import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
          <div class="container">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container"> 
      
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand page-scroll" href="#main"><img src="Website/images/logo.png" width="80" height="30"  /></a> </div>
     
        <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><Link class="page-scroll" to="/">Product</Link></li>
            <li><Link class="page-scroll" to="/features">Features</Link></li>
            <li><Link class="page-scroll" to="/reviews">Reviews</Link></li>
            <li><Link class="page-scroll" to="/pricing">Pricing</Link></li>
            <li><Link class="page-scroll" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
     
  </div>
    </div>
  )
}

export default Header