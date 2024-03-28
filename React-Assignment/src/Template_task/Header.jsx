import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import KeyboardArrowDownIcon, { KeyboardArrowDown } from '@mui/icons-material/';


function Header() {
  return (
    <div>
      <Navbar bg="light" className=' d-flex justify-content-between' style={{ fontSize: '13px' }}>

        <Nav className="">
          <Nav.Link href="#home">About us |</Nav.Link>
          <Nav.Link href="#features">My Account |</Nav.Link>
          <Nav.Link href="#pricing">Wishlist |</Nav.Link>
          <Nav.Link href="#pricing">Order Tracking </Nav.Link>
        </Nav>
        <Nav className="">
          <Nav.Link href="#pricing">Supper Value Deals - Save more with coupons</Nav.Link>
        </Nav>
        <Nav className="">
          <Nav.Link href="#home">Need help?</Nav.Link>
          <Nav.Link href="#features">Call Us: <span style={{ color: "#3BB77E", fontWeight: '600' }}>+ 1800 900</span></Nav.Link>
       
          <Nav.Link href="#pricing" className=" text-dark"  >
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600'}}>
                  English <KeyboardArrowDown/>
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn " style={{width:'-40px',marginLeft:'-100px',textAlign:'center'}}  >
                    <li><a class="dropdown-item" href="#!">Francias</a></li>
                    <li><a class="dropdown-item" href="#!">Usa</a></li>
                    <li><a class="dropdown-item" href="#!">Amrican</a></li>
                    <li><a class="dropdown-item" href="#!">Japan</a></li>                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className=" text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  USD <KeyboardArrowDown/>
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn"  style={{width:'-40px',marginLeft:'-100px',textAlign:'center'}}>
                    <li><a class="dropdown-item" href="#!">indian</a></li>
                    <li><a class="dropdown-item" href="#!">Austrliya</a></li>
                    <li><a class="dropdown-item" href="#!">maymar</a></li>
                  </ul>
                </span>
              </span>
            </Nav.Link>
        </Nav>
      </Navbar>


    </div>
  )
}

export default Header