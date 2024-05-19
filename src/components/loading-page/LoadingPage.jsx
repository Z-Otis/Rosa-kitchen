
import { Navigate, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './loading-page.css'
import ourStoryImg from "../../images/our-story-1.jpg"
import menuGroupOne from "../../images/menu-group-1.jpg"
import menuGroupTwo from "../../images/menu-group-2.jpg"
import menuGroupThree from "../../images/menu-group-3.jpg"
import menuGroupFour from "../../images/menu-group-4.jpg"
import delightOne from "../../images/delight-group-1.jpg"
import delightTwo from "../../images/delight-group-2.jpg"


import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


  




 const LoadingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.animate-left', {
          distance: '25rem',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'left',
          delay: 300,
        });
      }, []);
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.animate-right', {
          distance: '25rem',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'right',
          delay: 600,
        });
      }, []);
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.animate-top', {
          distance: '25rem',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'top',
          delay: 600,
        });
      }, []);
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.animate-bottom', {
          distance: '25rem',
          duration: 1000,
          easing: 'ease-in-out',
          origin: 'bottom',
          delay: 600,
        });
      }, []);

    return <main>
        <div className='hero' id='hero'>
        
       
       <header>
       <div className=' navbar-container'>
       <Navbar expand="lg" className="bg-transparent shadow-lg navbar-dark">
      <Container className='nav-container'>
        <Navbar.Brand href="#home" className='fs-3 opacity-75'>Rosa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='shadow-none border-0 fs-2 ' />
        <Navbar.Collapse id="basic-navbar-nav" className=' '>
          <Nav className='me-auto ms-auto fs-5'>
          
          <Nav.Link href="#home" >HOME</Nav.Link>



          <Nav.Link href="#">MENU</Nav.Link>
          <Nav.Link href="#">RESERVATIONS</Nav.Link>
          <Nav.Link href="#">NEWS</Nav.Link>
          <Nav.Link href="#">SHOP</Nav.Link>
          <Nav.Link href="#">CONTACT</Nav.Link>
          </Nav>
            <div className='d-flex justify-content-start align-items-center gap-2' >
         <a href="#" className='text-white' >Signin</a>
        <button className='text-white btns border-0 py-1 px-3'> <a href="#" >Signup</a></button>
            </div>
         </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
       </header>
       <div className='hero-sec-container'>
       <section className='text-white text-center hero-section'>
        <h3 className='sub-headline'><span className='first-letter'>W</span>elcome</h3>
        <h3 className=' headline mt-0'>The Rosa</h3>
       
        <h5 className='headline-description single-animation'>READY TO BE OPENED</h5>
       <a href="/kitchen" className='btn single-animation px-3'> EXPLORE OUR KITCHEN</a>
      
       
        </section>

       </div>
       
        
       </div>
       <section className="discover-our-story">
            <div className="container text-center">
            <div className="restaurant-info">
            <div className="restaurant-description animate-left me-lg-5">
                        <div className="global-headline">
                            <h2 className='sub-headline'>
                                <span className='first-letter'>D</span>iscover 
                            </h2>
                            <h3 className='text-black headline'>OUR STORY</h3> 
                            <div className="asterisk mt-3 mb-3 fw-bold">*</div>
                            
                        </div>
                      
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores. Voluptas, perspiciatis eius facere illum harum, vel dicta unde, alias veritatis facilis beatae maiores. Aliquid id explicabo dolores porro quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione itaque repellat voluptate iusto libero eum odio eveniet doloremque accusantium cupiditate, neque nam aspernatur laborum, iure dolores quae ducimus necessitatibus.</p>
                        <a href="#" className='btn mt-3'>About us</a>
                    </div>
                    <div className="restaurant-info-img animate-right">
                        <img src={ourStoryImg} className='img mb-3' alt="" />
                    </div>

                </div>
            </div>
        </section>
        <section className='tasteful-recipes between'>
            <div className="container text-center">
                <div className="global-headline">
                    <div className="animate-top">
                    <h2 className='sub-headline'>
                        <span className='first-letter'>T</span>asteful  
                    </h2>
                    </div>
                    <div className="animate-bottom">
                    <h3 className='text-white headline'>RECIPES</h3>
                    </div>
                
                            
                            
                </div>
            </div>
        </section>
        <section className='discover-our-menu'>
        <div className="container text-center">
        <div className="restaurant-info">

        <div className="img-group animate-left">
                    <img src={menuGroupOne} className='img ' alt="" />
                    <img src={menuGroupTwo} className='img ' alt="" />
                    <img src={menuGroupThree} className='img ' alt="" />
                    <img src={ menuGroupFour} className='img ' alt="" />
                </div>




        <div className="restaurant-description animate-right ms-lg-5 ">
                    <div className="global-headline">
                        <h2 className='sub-headline'>
                            <span className='first-letter'>D</span>iscover 
                        </h2>
                        <h3 className='text-black headline'>menu</h3> 
                        <div className="asterisk mt-3 mb-3 fw-bold">*</div>
                        
                    </div> 
               
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores. Voluptas, perspiciatis eius facere illum harum, vel dicta unde, alias veritatis facilis beatae maiores. Aliquid id explicabo dolores porro quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione itaque repellat voluptate iusto libero eum odio eveniet doloremque accusantium cupiditate, neque nam aspernatur laborum, iure dolores quae ducimus necessitatibus.</p>
                    <a href="/kitchen" className='btn mt-3'>View the full menu</a>
                </div>
                

            </div>
        </div>
        </section>
        <section className='perfect-blend between'>
            <div className="container text-center">
                <div className="global-headline">
                    <div className="animate-top">
                    <h2 className='sub-headline'>
                        <span className='first-letter'>T</span>he perfect  
                    </h2>
                    </div>
                    <div className="animate-bottom">
                    <h3 className='text-white headline'>BLEND</h3>
                    </div>
                
                            
                            
                </div>
            </div>
        </section>
        <section className="culinary-delight">
        <div className="container text-center">
        <div className="restaurant-info">
                <div className="restaurant-description animate-left">
                    <div className="global-headline">
                        <h2 className='sub-headline'>
                            <span className='first-letter'>C</span>ulinary
                        </h2>
                        <h3 className='text-black headline'>DELIGHT</h3> 
                        <div className="asterisk mt-3 mb-3 fw-bold">*</div>
                        
                    </div>
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores. Voluptas, perspiciatis eius facere illum harum, vel dicta unde, alias veritatis facilis beatae maiores. Aliquid id explicabo dolores porro quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione itaque repellat voluptate iusto libero eum odio eveniet doloremque accusantium cupiditate, neque nam aspernatur laborum, iure dolores quae ducimus necessitatibus.</p>
                    <a href="#" className='btn mt-3'>Make a reservation</a>
                </div>
                <div className="img-group p-5 mb-5 ">
                   <img src={delightOne} className='animate-top img' alt="" />
                   <img src={delightTwo} className='animate-bottom img' alt="" />
                </div>

            </div>
        </div>
        </section>
            <footer className='text-center'>
                <div className="container">
                    <div className="back-to-top ">
                     <a href="#hero"><i className="fas fa-chevron-up"></i></a>
                     </div>
                     <div className="footer-content">
                        <div className="footer-content-about animate-top">
                            <h4>About Rosa</h4>
                            <div className="asterisk"><i className="fas fa-asterisk"></i></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis vel officia, odit maiores labore illo numquam! Expedita facilis excepturi libero quae quasi maxime nisi aliquid, voluptatibus, sed tempore dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus similique reiciendis modi iusto voluptates rerum. Accusantium aut asperiores neque voluptas nisi a, ad nemo veritatis incidunt exercitationem? Blanditiis, ipsum!</p>
                        </div>
                        <div className="footer-content-divider animate-bottom">
                            <div className="social-media">
                                <h4>Follow along</h4>
                                <ul className='social-icons'>
                                    <li><a href="">
                                        <i className="fab fa-twitter"></i>
                                        </a></li>
                                    <li><a href="">
                                        <i className="fab fa-facebook-square"></i>
                                        </a></li>
                                    <li><a href="">
                                        <i className="fab fa-linkedin-in"></i>
                                        </a></li>
                                    <li><a href="">
                                        <i className="fab fa-pinterest"></i>
                                        </a></li>
                                    <li><a href="">
                                        <i className="fab fa-tripadvisor"></i>
                                        </a></li>
                                </ul>
                            </div>
                            <div className="newsletter-container">
                                <h4>Newsletter</h4>
                                <form action="" className="newsletter-form">
                                    <input type="text" className="newsletter-input" placeholder='your email' />
                                    <button className="newsletter-btn" type='submit'><i className='fas fa-envelope'></i></button>
                                </form>
                            </div>
                        </div>
                     </div>
                </div>
            </footer>

    </main>
}
export default LoadingPage