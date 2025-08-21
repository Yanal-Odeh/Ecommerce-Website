import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Footer.module.css';
function Footer() {
  return (
    <>
    <footer>
        <div className={style.container}>
        <h4>D.patel</h4>
        
        <div className={style.menu}>
            <NavLink>Products</NavLink>
            <NavLink>Categories</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
        </div>

        <div className={style.policy}>
            <a href="">Privacy Policy</a>
            <a href="">Accessibility Statement</a>
            <a href="">Shipping Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Refund Policy</a>
        </div>

        <div className={style.about}>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>500 Terry Francine St. San Francisco, CA 94158</p>

        </div>
        </div>

        <p>© 2035 by D. Patel. Powered and secured by Wix </p>
        </footer>
        

      
   

   
    </>
  )
}

export default Footer