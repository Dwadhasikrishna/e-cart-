import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{width:'100%',height:'300px',color:'white'}} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5 bg-primary  '>
        {/* footer */}
        <div className="footer d-flex justify-content-evenly align-items-center w-100">
              {/* website */}
            <div className="website" style={{width:'400px'}}>
                <h4> <i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>{' '}
                
           E-CART</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti officiis omnis suscipit nisi natus accusamus explicabo distinctio quis quisquam obcaecati sit atque, velit eum voluptates quaerat deserunt? Culpa, modi!</p>
           <p>sit amet consectetur adipisicing elit</p>
            </div>
            {/* links */}
            <div className="links d-flex flex-column ">
              <h4 className='mb-'>Links</h4>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
              <Link to={'/wishlist'}style={{textDecoration:'none',color:'white'}}>WishList</Link>
              <Link to={'/cart'}style={{textDecoration:'none',color:'white'}}>Cart</Link>

    
            </div>
            {/* guides */}
            <div className="guides d-flex flex-column">
              <h4>Guides</h4>
              <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
              <Link to={'https://react-bootstrap.github.io/'}style={{textDecoration:'none',color:'white'}}>React Bootstap</Link>
              <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>


            </div>
            {/* contact */}
            <div className="contact">
              <h4 className='mb-3'>Contact Us</h4>
              <div className='d-flex mb-4'>
                <input type="text" className='form-control' placeholder='Enter Your Email Id' />
                <button className='btn btn-warning text-white ms-2'>Subscribe</button> 
                </div>
                <div className='icons d-flex justify-content-evenly mt-3'>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-facebook-f fa-2x"></i></Link>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-github fa-2x"></i></Link>
       
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}> <i class="fa-brands fa-linkedin fa-2x"></i></Link>
        </div>

            </div>
        </div>
        <p>Copyright © 2023 E-CART.Built with React.</p>
    </div>
  )
}

export default Footer