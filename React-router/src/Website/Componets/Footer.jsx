import React from 'react'

function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <div class="col-md-7"> <img src="Website/images/logo.png" width="80" height="30" alt="Image" />
            <p> Lorem ipsum dolor sit. Incidunt laborum beatae earum nihil odio consequatur officiis
              tempore consequuntur officia ducimus unde doloribus quod unt repell </p>
            <div class="footer-text">
              <p> Copyright © 2016 iLand. All Rights Reserved. Made with <i class="ion-heart"></i> by <a
                  href="http://www.designstub.com/">Designstub</a></p>
            </div>
          </div>
          <div class="col-md-5" id='contact'>
            <h1>Contact Us</h1>
            <p> Contact our 24/7 customer support if you have any <br class="hidden-xs"/>
              questions. We'll help you out. </p>
            <a href="mailto:support@gmail.com">contact@iland.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer