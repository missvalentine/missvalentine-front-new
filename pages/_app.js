import App from 'next/app'

import store from '../redux/store'
import { Provider } from 'react-redux'

import '../styles/globals.scss'

import '../styles/stockstyles/animate.css'
import '../styles/stockstyles/ionicons.min.css'
import '../styles/stockstyles/flaticon.css'
import '../styles/stockstyles/icomoon.css'
import '../styles/stockstyles/magnific-popup.css'
import '../styles/stockstyles/open-iconic-bootstrap.min.css'
import '../styles/stockstyles/owl.carousel.min.css'
import '../styles/stockstyles/owl.theme.default.min.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
