import App from 'next/app'

import reduxStore from '../redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

// lib styles
import 'react-toastify/dist/ReactToastify.css'

// global styles
import '../styles/globals.scss'

// custom styles
import '../styles/stockstyles/animate.css'
import '../styles/stockstyles/ionicons.min.css'
import '../styles/stockstyles/flaticon.css'
import '../styles/stockstyles/icomoon.css'
import '../styles/stockstyles/magnific-popup.css'
import '../styles/stockstyles/open-iconic-bootstrap.min.css'
import '../styles/stockstyles/owl.carousel.min.css'
import '../styles/stockstyles/owl.theme.default.min.css'

const MyApp = ({ Component, pageProps }) => {
  const reduxStore1 = reduxStore()
  const { store, persistor } = reduxStore1
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton
          limit={2}
        />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
export default MyApp
