import React from 'react'
import styles from '../../styles/components/Loader.module.scss'

const Loader = (props) => {
  const { isLoading = false, children } = props
  const loader = (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  if (children) {
    if (isLoading)
      return (
        <div>
          {children}
          <div class="loading-container">{loader}</div>
        </div>
      )
    return children
  }
  return loader
}

export default Loader
