import React from 'react'
import KeyboardArrowDownIcon, { KeyboardArrowDown, LocalFireDepartment, LocalFireDepartmentOutlined, Microsoft } from '@mui/icons-material/';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';








function section() {


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary " >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Dropdown className="d-inline mx-2" >
              <Dropdown.Toggle id="dropdown-autoclose-true" style={{ width: '250px', backgroundColor: '#40b982', border: 'none' }}>
                <Microsoft /> Browse All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ margin: '-20px', marginLeft: '30px' }}>
                <div className='d-flex'>
                  <div>
                    <Dropdown.Item href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg" height={'30px'} alt="" /> Milks and Dairies</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-3.svg " height={'30px'} alt="" /> Clothing & beauty</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-2.svg" height={'30px'} alt="" /> Pet Foods & toy</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-4.svg" height={'30px'} alt="" /> Baking matrial</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-5.svg" height={'30px'} alt="" /> Fresh Fruit</Dropdown.Item>

                  </div>
                  <div>
                    <Dropdown.Item href="#"><img src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-6.svg" height={'30px'} alt="" />Wines & Drinks</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-7.svg" height={'30px'} alt="" />Fresh Seafood</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-8.svg" height={'30px'} alt="" />fast food</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-9.svg" height={'30px'} alt="" />Vegetables</Dropdown.Item> <br />
                    <Dropdown.Item href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-10.svg" height={'30px'} alt="" />Bread and juice</Dropdown.Item>
                  </div>
                </div>

              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="#pricing" className="me-3 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  <LocalFireDepartmentOutlined style={{ color: '#40b982' }} /> Deals
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600', color: '#40b982' }}>
                  Home <KeyboardArrowDown />
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                    <li><a class="dropdown-item" href="#!">Home 1</a></li>
                    <li><a class="dropdown-item" href="#!">Home 2</a></li>
                    <li><a class="dropdown-item" href="#!">Home 3</a></li>
                    <li><a class="dropdown-item" href="#!">Home 4</a></li>
                    <li><a class="dropdown-item" href="#!">Home 5</a></li>
                    <li><a class="dropdown-item" href="#!">Home 6</a></li>
                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  About
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  Shop <KeyboardArrowDown />
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                    <li><a class="dropdown-item" href="#!">Shop Grid-Right Sidebar</a></li>
                    <li><a class="dropdown-item" href="#!">Shop Grid-Left Sidebar</a></li>
                    <li><a class="dropdown-item" href="#!">Shop list-Right Sidebar</a></li>
                    <li><a class="dropdown-item" href="#!">Shop list-Left Sidebar</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Wide</a></li>
                    <li><a class="dropdown-item" href="#!">Single Product</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Filter</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Wishlist</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Cart</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Checkout</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Compare</a></li>
                    <li><a class="dropdown-item" href="#!">Shop - Invoice</a></li>
                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  Vendors <KeyboardArrowDown />
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                    <li><a class="dropdown-item" href="#!">vendors Grid</a></li>
                    <li><a class="dropdown-item" href="#!">vendors List</a></li>
                    <li><a class="dropdown-item" href="#!">vendor Details 01</a></li>
                    <li><a class="dropdown-item" href="#!">vendor Details 02</a></li>
                    <li><a class="dropdown-item" href="#!">vendors Dashboard</a></li>
                    <li><a class="dropdown-item" href="#!">vendors Guide</a></li>
                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-3 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  Mega menu <KeyboardArrowDown />
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown" style={{ width: '1400px', marginLeft: '-780px', paddingTop: '30px', marginTop: '10px' }}>
                    <div className='d-flex justify-content-center'>
                      <div style={{ fontSize: '15px' }}>
                        <h3 style={{ fontSize: '20px', margin: '15px', color: '#40b982' }}>Fruits & Vagitable</h3>
                        <li><a class="dropdown-item" href="#!">Fresh Vegetables</a></li>
                        <li><a class="dropdown-item" href="#!">herbs & Seasanings</a></li>
                        <li><a class="dropdown-item" href="#!">Cuts & Sprouts</a></li>
                        <li><a class="dropdown-item" href="#!">Exotic Fruits & Veggies</a></li>
                        <li><a class="dropdown-item" href="#!">Packaged Produce</a></li>
                        <li><a class="dropdown-item" href="#!"></a></li>
                      </div>
                      <div style={{ fontSize: '15px' }}>
                        <h3 style={{ fontSize: '20px', margin: '15px', color: '#40b982' }}>Breakfast & dairy</h3>
                        <li><a class="dropdown-item" href="#!">Milk & Flavoured Milk</a></li>
                        <li><a class="dropdown-item" href="#!">Butter and margarine</a></li>
                        <li><a class="dropdown-item" href="#!">Eggs Substitues</a></li>
                        <li><a class="dropdown-item" href="#!">marmalades</a></li>
                        <li><a class="dropdown-item" href="#!">Sour Cream</a></li>
                        <li><a class="dropdown-item" href="#!">Cheese</a></li>
                      </div>
                      <div style={{ fontSize: '15px' }}>
                        <h3 style={{ fontSize: '20px', margin: '15px', color: '#40b982' }}>Meat & Seafood</h3>
                        <li><a class="dropdown-item" href="#!">Breakfast sausage</a></li>
                        <li><a class="dropdown-item" href="#!">Dinner Sausage</a></li>
                        <li><a class="dropdown-item" href="#!">Chicken</a></li>
                        <li><a class="dropdown-item" href="#!">Sliced Delo Meat</a></li>
                        <li><a class="dropdown-item" href="#!">Wild Caught Fillets</a></li>
                        <li><a class="dropdown-item" href="#!">Crab and Shelifish</a></li>
                      </div>
                      <div className='me-4 hov-images'>
                        <div className='img-title'>
                          <p>HOT DEALS</p>
                          <h3>Don't miss <br />Trending</h3>
                          <span>Save to 50%</span> <br />
                          <button>Shop now</button>
                        </div>
                      </div>
                    </div>
                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className=" text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  Blog <KeyboardArrowDown />
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                    <li><a class="dropdown-item" href="#!">Blog category Grid</a></li>
                    <li><a class="dropdown-item" href="#!">Blog category List</a></li>
                    <li><a class="dropdown-item" href="#!">Blog category Big</a></li>
                    <li><a class="dropdown-item" href="#!">Blog category Wide</a></li>
                    <li><a class="dropdown-item" href="#!">Single Post</a></li>
                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className=" text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  Pages <KeyboardArrowDown />
                  <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                    <li><a class="dropdown-item" href="#!">About Us</a></li>
                    <li><a class="dropdown-item" href="#!">Contact</a></li>
                    <li><a class="dropdown-item" href="#!">My Account</a></li>
                    <li><a class="dropdown-item" href="#!">Login</a></li>
                    <li><a class="dropdown-item" href="#!">Register</a></li>
                    <li><a class="dropdown-item" href="#!">Forgot Password</a></li>
                    <li><a class="dropdown-item" href="#!">Privacy Policy</a></li>
                    <li><a class="dropdown-item" href="#!">terms Of Service</a></li>
                    <li><a class="dropdown-item" href="#!">404 Page</a></li>
                  </ul>
                </span>
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-4 text-dark">
              <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown nav-hover" style={{ fontWeight: '600' }}>
                  Contact

                </span>
              </span>
            </Nav.Link>
            <div className='d-flex' style={{ marginLeft: '10px' }}>
              <Nav.Link href="#action1"><img src="	https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-headphone.svg" alt="" /></Nav.Link>
              <Nav.Link href="#action1"><span style={{ fontSize: '25px', fontWeight: '700', color: '#40b982' }}>1900 - 888</span>
                <p style={{ fontSize: '13px', fontWeight: '700' }}>24/7 Support Center</p>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </div>
  )
}

export default section