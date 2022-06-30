import React from 'react'
import styles from './UserDashboard.module.scss'
import Link from 'next/link'
import Router from 'next/router'

const optionMenuListData = [
  {
    headingName: 'Account Details',
    listItems: [
      { title: 'Profile', url: '/dashboard' },
      { title: 'Saved Addresses', url: '/dashboard/address' },
      { title: 'orders', url: '/dashboard/orders' },
    ],
  },
  {
    headingName: 'LEGAL',
    listItems: [
      { title: 'Privacy Policy', url: '/privacy-policy' },
      { title: 'Term of Use', url: '/privacy-policy' },
    ],
  },
]

const OptionMenu = () => {
  return (
    <div className={styles.optionMenuLists}>
      {optionMenuListData.map((optionMenuListItem) => (
        <div key={optionMenuListItem.headingName}>
          <h6>{optionMenuListItem.headingName}</h6>
          <ul className={styles.optionMenuList}>
            {optionMenuListItem.listItems.map((listItem) => (
              <Link key={listItem.title} href={listItem.url}>
                <li
                  className={`${styles.optionMenuListItem} ${
                    Router.pathname === listItem.url &&
                    styles.optionMenuListItemActive
                  }`}
                >
                  {listItem.title}
                </li>
              </Link>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default OptionMenu
