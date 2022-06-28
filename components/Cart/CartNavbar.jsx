import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Cart.module.scss'

// status
// Bag : 1
// Address: 2
// Payment : 3
const CartNavbar = (props) => {
  const { status = 1 } = props
  const router = useRouter()

  const handleCartRedirect = (_path) => {
    router.push(_path)
  }

  return (
    <div className={`row justify-content-center ${styles.cartNavbarWrapper}`}>
      <button
        className={`${styles.cartNavbarStatus} ${
          status >= 1 && styles.cartNavbarStatusActive
        }`}
        onClick={() => handleCartRedirect('/cart')}
      >
        Bag
      </button>
      <button
        className={`${styles.cartNavbarStatus} ${
          status >= 2 && styles.cartNavbarStatusActive
        }`}
        disabled
      >
        ------
      </button>
      <button
        className={`${styles.cartNavbarStatus} ${
          status >= 2 && styles.cartNavbarStatusActive
        }`}
        onClick={() => handleCartRedirect('/checkout')}
        disabled={status <= 2}
      >
        Address
      </button>
      <button
        className={`${styles.cartNavbarStatus} ${
          status >= 3 && styles.cartNavbarStatusActive
        }`}
      >
        ------
      </button>
      <button
        className={`${styles.cartNavbarStatus} ${
          status >= 3 && styles.cartNavbarStatusActive
        }`}
        disabled={status <= 3}
        onClick={() => handleCartRedirect('/payment')}
      >
        Payment
      </button>
    </div>
  )
}

export default CartNavbar
