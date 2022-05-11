import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { isCartAvailable, projectName } from '../../constant/projectSetting'
import Modal from '../CustomComponents/Modal'
import LoginBox from '../Login/LoginBox'

const modalStyles = {
  content: {
    top: '5%',
    left: '30%',
    right: 'auto',
    bottom: '5%',
    width: '480px',
    height: 'auto',
    marginRight: '-50%',
    zIndex: 22,
    padding: 0,
    // transform: 'translate(-50%, -50%)',
  },
}
const Navbar = (props) => {
  const { fixedNavbar } = props
  const [isNavItemOpen, setIsNavItemOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const cartLength = useSelector((state) => state.cartState.cartLength)
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn)

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)
  console.log('isLoggedIn', isLoggedIn)
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
        fixedNavbar && ' ftco-navbar-light-2 '
      }`}
      id="ftco-navbar"
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">{projectName}</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavItemOpen((s) => !s)}
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div
          className={`${isNavItemOpen || 'collapse'} navbar-collapse`}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              {' '}
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link href="/shop/all">
                <a className="nav-link">Shop</a>
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            {isCartAvailable && (
              <li className="nav-item">
                {' '}
                <Link href="/cart">
                  <a href="cart.html" className="nav-link">
                    <span className="icon-shopping_cart"></span>[{cartLength}]
                  </a>
                </Link>
              </li>
            )}
            {isCartAvailable && (
              <li
                className="nav-item"
                onClick={isLoggedIn ? () => {} : openLoginModal}
              >
                <div className="nav-link pointer">
                  {isLoggedIn ? (
                    <img
                      width="25px"
                      height="25px"
                      // className="pointer"
                      src="https://images.all-free-download.com/images/graphiclarge/lady_avatar_template_handdrawn_colored_closeup_6849758.jpg"
                    />
                  ) : (
                    <span className="icon-female"></span>
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>
        <Modal
          isOpen={isLoginModalOpen}
          closeModal={closeLoginModal}
          modalStyles={modalStyles}
        >
          <LoginBox />
        </Modal>
      </div>
    </nav>
  )
}
export default Navbar
