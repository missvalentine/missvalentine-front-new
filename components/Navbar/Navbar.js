import Link from 'next/link';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { isCartAvailable, projectName } from "../../constant/projectSetting";

const Navbar=(props) => {

const { fixedNavbar } =props;
	const [isNavItemOpen, setIsNavItemOpen] = useState(false);
	const cartLength = useSelector(state => state.cartState.cartLength);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${fixedNavbar && " ftco-navbar-light-2 "}`} id="ftco-navbar">
	    <div className="container">
		<Link href="/">
	      	<a className="navbar-brand">{projectName}</a>
		  </Link>
	      <button className="navbar-toggler" type="button" onClick={()=>setIsNavItemOpen(s=>!s)} data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className={`${isNavItemOpen || "collapse"} navbar-collapse`} id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"> <Link href="/"><a className="nav-link">Home</a></Link></li>
	          <li className="nav-item"> <Link href="/shop/all"><a className="nav-link">Shop</a></Link></li>
	          <li className="nav-item"> <Link href="/about"><a className="nav-link">About</a></Link></li>
	          <li className="nav-item"> <Link href="/contact"><a className="nav-link">Contact</a></Link></li>
	          {isCartAvailable && <li className="nav-item cta cta-colored"> <Link href="/cart"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>[{cartLength}]</a></Link></li>}
	        </ul>
	      </div>
	    </div>
	  </nav>
  )
}
export default Navbar;