import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { isCartAvailable, projectName } from '../../constant/projectSetting'
import { imageLoader } from '../../utils/helperFunction'
import LoginBox from '../Login/LoginBox'
import { DialogHeader, Popover } from 'realayers'
import { clearUserAction } from '../../redux/actions/authActions'
import { useDialog } from 'realayers'

const Navbar = (props) => {
  const { fixedNavbar = true } = props
  const router = useRouter()
  const dispatch = useDispatch()

  const [isNavItemOpen, setIsNavItemOpen] = useState(false)
  const cartLength = useSelector((state) => state.cartState.cartLength)
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn)

  console.log('isLoggedIn', isLoggedIn)
  const { toggleOpen, Dialog } = useDialog()
  const isMobile = false
  const handleLoginRedirect = () => {
    if (!isLoggedIn) {
      if (isMobile) router.push('/login')
      else toggleOpen()
    } else {
      //do logout logic
    }
  }
  const handleLogOut = async (e) => {
    try {
      e.preventDefault()
      toast.success('User Logout Succesfully👌')
      dispatch(clearUserAction({}))
    } catch (error) {
      dispatch(clearUserAction({}))
    }
  }

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
              <Link href="/enquiry-form">
                <a className="nav-link">E-Catalouge</a>
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
              <li className="nav-item" onClick={handleLoginRedirect}>
                <div className="nav-link pointer">
                  {isLoggedIn ? (
                    <Popover
                      content={
                        <ul className="list-group list-group-flush text-left">
                          <li className="list-group-item pr-5">
                            <Link href="/dashboard">
                              <a className="text-secondary">Dashboard</a>
                            </Link>
                          </li>
                          <li className="list-group-item pr-5">
                            <Link href="/dashboard">
                              <a className="text-secondary">Orders</a>
                            </Link>
                          </li>
                          <li className="list-group-item pr-5">
                            <Link href="/dashboard">
                              <a className="text-secondary">Wishlist</a>
                            </Link>
                          </li>
                          <li className="list-group-item pr-5">
                            <Link href="/enquiry-form">
                              <a className="text-secondary">E-Catalouge</a>
                            </Link>
                          </li>
                          <li
                            className="list-group-item pr-5 pointer text-secondary"
                            onClick={handleLogOut}
                          >
                            Log Out
                          </li>
                        </ul>
                      }
                    >
                      <Image
                        width="25px"
                        height="25px"
                        // className="pointer"
                        loader={imageLoader}
                        alt="user logo"
                        src="https://images.all-free-download.com/images/graphiclarge/lady_avatar_template_handdrawn_colored_closeup_6849758.jpg"
                      />
                    </Popover>
                  ) : (
                    <span className="icon-female"></span>
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>
        <Dialog
          disablePadding
          innerClassName={{
            background: 'white',
          }}
          headerElement={
            <DialogHeader
              className="dialog-header"
              showCloseButton={false}
            ></DialogHeader>
          }
        >
          <LoginBox />
        </Dialog>
      </div>
    </nav>
  )
}
export default Navbar
