import React from 'react'
import styles from './UserDashboard.module.scss'
import moment from 'moment'

const ProfileView = (props) => {
  const { name, email, phoneNo, createdAt } = props
  return (
    <div className={styles.profileWrapper}>
      <h5>Profile Details</h5>
      <hr />
      <br />
      <div className={styles.infoRow}>
        <span>Full Name</span>
        <span>{name}</span>
      </div>
      <div className={styles.infoRow}>
        <span>Email ID</span>
        <span>{email}</span>
      </div>
      <div className={styles.infoRow}>
        <span>Phone Number</span>
        <span>{phoneNo}</span>
      </div>
      <div className={styles.infoRow}>
        <span>Alternate Phone Number</span>
        <span>{phoneNo}</span>
      </div>
      <div className={styles.infoRow}>
        <span>Joined</span>
        <span>{moment(createdAt).format('DD MMMM YYYY')}</span>
      </div>
    </div>
  )
}

export default ProfileView
