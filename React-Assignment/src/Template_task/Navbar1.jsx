import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FavoriteBorderIcon, { DonutLargeOutlined, FavoriteBorder, PermIdentityOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material/';
import Badge from '@mui/material/Badge';
import Autocomplete from '@mui/joy/Autocomplete';



function Navbar1() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">

                <Navbar.Brand href="#"><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">



                    <Form className="d-flex rounded-2  nav-main" >

                        <Autocomplete style={{ background: 'none', outline: 'none', color: "rgb(0, 0, 0)" }}
                            variant="plain"
                            placeholder="All categories"
                            options={top100Films}
                            sx={{ width: 200 }}
                        />


                        <Form.Control style={{ height:'50px', border: 'none', background: 'none', outline: 'none' }}

                            type="search"
                            placeholder=" |  Search for items..."
                            className="me-2"
                        />
                        <Search className=' me-2'  style={{color:'grey',marginTop:'15px'}}/>

                    </Form>

                    <Nav
                        className="my-2 my-lg-0 me-3"
                        style={{ maxHeight: '100px', marginLeft: "60px" }}
                        navbarScroll
                    >

                        <Nav.Link href="#action1" >
                            <Badge badgeContent={3} className='me-2' color="success">
                                <DonutLargeOutlined />
                            </Badge>
                            Compare
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Badge badgeContent={6} className='me-2' color="success">
                                <FavoriteBorder />
                            </Badge>
                            Wishlist
                        </Nav.Link>
                        <Nav.Link href="#action1">
                            <Badge badgeContent={2} className='me-2' color="success">
                                <ShoppingCartOutlined />
                            </Badge>
                            Cart
                        </Nav.Link>

                        <Nav.Link href="#action1"><PermIdentityOutlined />Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
const top100Films = [
    { label: 'All Categories', year: 1994 },
    { label: 'Milkes and dairies', year: 1972 },
    { label: 'Wines & Alcohol', year: 1974 },
    { label: 'Clothing & Beauty', year: 2008 },
    { label: 'Fast food', year: 1957 },
    { label: "Baking material", year: 1993 },
    { label: 'Fresh seafood', year: 1994 },
    {
        label: 'Ice cream',
        year: 2003,
    },
]
export default Navbar1
