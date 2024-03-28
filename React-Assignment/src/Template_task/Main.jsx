import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';





function Main() {
    return (
        <div>
            {/* <Carousel>
                <Carousel.Item interval={1000}>
                    <Carousel.Caption className='slider-responsiv'>
                        <h3>Don’t miss amazing <br />  grocery deals </h3>
                        <p>Sign up for the daily newsletter </p>
                        <div className='slider-contain'>
                            <img className='ico-img' src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-plane.png" alt="" />
                            <input type="text" placeholder='  Your email address' />
                            <button>Subscribe</button>
                        </div>
                    </Carousel.Caption>
                    <img className='rounded-5' src="https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-1.png" height={'500px'} width={'100%'} alt="" />


                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className='rounded-5' src="https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-2.png" height={'500px'} width={'100%'} alt="" />

                    <Carousel.Caption className='slider-responsiv'>
                        <h3>Fresh Vegetables <br />Big discount</h3>
                        <p>Save up to 50% off on your first order</p>
                        <div className='slider-contain'>
                            <img className='ico-img' src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-plane.png" alt="" />
                            <input type="text" placeholder='  Your email address' />
                            <button>Subscribe</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

            {/* --------------------------- */}
            <Carousel fade>
                <Carousel.Item>
                    <img className='rounded-5' src="https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-1.png" height={'500px'} width={'100%'} alt="" />
                    <Carousel.Caption className='slider-responsiv'>
                        <h3>Don’t miss amazing <br />  grocery deals </h3>
                        <p>Sign up for the daily newsletter </p>
                        <div className='slider-contain'>
                            <img className='ico-img' src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-plane.png" alt="" />
                            <input type="text" placeholder='  Your email address' />
                            <button>Subscribe</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='rounded-5' src="https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-2.png" height={'500px'} width={'100%'} alt="" />
                    <Carousel.Caption className='slider-responsiv'>
                        <h3>Fresh Vegetables <br />Big discount</h3>
                        <p>Save up to 50% off on your first order</p>
                        <div className='slider-contain'>
                            <img className='ico-img' src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-plane.png" alt="" />
                            <input type="text" placeholder='  Your email address' />
                            <button>Subscribe</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            {/* --------------------------- */}
            <br />
            <div className='d-flex flex-wrap main-link'>
                <div><span>Featured Categories</span></div>
                <div><a href="">Cake & Milk</a></div>
                <div><a href="">Coffes & Teas</a></div>
                <div><a href="">Pet Foods</a></div>
                <div><a href="">Vegetables</a></div>

            </div>

            <div className='mt-5 me-2 d-flex flex-wrap' style={{ margin: '50px' }}>
                <Card style={{ width: '9rem', backgroundColor: '#F4F6FA', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Cake & Milk</Card.Title>
                        <Card.Title className='font-1'>26 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#fffceb', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>oganic Kiwi</Card.Title>
                        <Card.Title className='font-1'>28 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#ecffec', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Peach</Card.Title>
                        <Card.Title className='font-1'>26 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#feefea', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Red Apple</Card.Title>
                        <Card.Title className='font-1'>54 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#fff3ff', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Snack</Card.Title>
                        <Card.Title className='font-1'>56 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#f2fce4', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Vegitables</Card.Title>
                        <Card.Title className='font-1'>72 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#feefea', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Strawbery</Card.Title>
                        <Card.Title className='font-1'>36 items</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '9rem', backgroundColor: '#fffceb', margin: '10px', color: '#253d4e' }}>
                    <Card.Img variant="top" src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png" height={'150px'} width={'120px'} />
                    <Card.Body className=' text-center'>
                        <Card.Title>Black Plum</Card.Title>
                        <Card.Title className='font-1'>123 items</Card.Title>
                    </Card.Body>
                </Card>



            </div>
            
    

        </div>
    )
}

export default Main