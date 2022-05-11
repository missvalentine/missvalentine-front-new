import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  setUserAction,
  setUserAuthAction,
} from '../../redux/actions/authActions'
import styles from '../../styles/components/LoginBox.module.scss'
import { callApi } from '../../utils/callApi'
import { EmailReg } from '../../utils/regEx'
import Loader from '../CustomComponents/Loader'

const LoginBox = (props) => {
  const { closeModal } = props
  const [isLoginBox, setIsLoginBox] = useState(true)
  const dispatch = useDispatch()
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNo, setPhoneNo] = useState(null)
  const [password, setPassword] = useState(null)

  const handleRegister = async (e) => {
    try {
      e.preventDefault()
      //   if (!EmailReg.test(email)) {
      //     toast.error('Please enter a valid email!')
      //     return
      //   }
      const dataToSend = { email, password, name, phoneNo }
      const response = await callApi({
        method: 'post',
        url: '/auth/register',
        data: dataToSend,
      })
      if (response) {
        console.log(response)
        toast.success('User Register Succesfully👌')
        dispatch(setUserAction(response.data))
        closeModal()
      }
    } catch (error) {
      toast.error("Could'nt register right now! 🤯")
    }
  }

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      //   if (!EmailReg.test(email)) {
      //     toast.error('Please enter a valid email!')
      //     return
      //   }
      const dataToSend = { email, password }
      const response = await callApi({
        method: 'post',
        url: '/auth/login',
        data: dataToSend,
      })
      if (response) {
        toast.success('Welcome👌')
        const userAuthData = {
          user: response.data.user,
          authToken: response.data.token,
        }
        dispatch(setUserAuthAction(userAuthData))
        closeModal()
      }
    } catch (error) {
      console.log(error)
      toast.error("Could'nt Login right now! 🤯")
    }
  }

  return (
    <Loader isLoading={false}>
      <div className={styles.boxContainer}>
        <div className="d-flex justify-content-between">
          <div
            className={`w-100 text-center pointer`}
            onClick={() => setIsLoginBox(true)}
          >
            <div className={`${isLoginBox && 'text-primary-2'}`}>Login</div>
            {isLoginBox && (
              <div className={`pink-gradient hline-2 mt-2 w-75 mx-auto `}></div>
            )}
          </div>
          <div className="vline" />
          <div
            className={`w-100 text-center pointer`}
            onClick={() => setIsLoginBox(false)}
          >
            <div className={`${!isLoginBox && 'text-primary-2'}`}>
              Create Account
            </div>
            {!isLoginBox && (
              <div className={`pink-gradient hline-2 mt-2 w-75 mx-auto `}></div>
            )}
          </div>
        </div>

        {isLoginBox ? (
          <div className={styles.box}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5 text-center form-group">
              <button
                onClick={handleLogin}
                className="btn btn-primary-2 py-2 px-4 w-50 "
              >
                Continue
              </button>
            </div>
            <div className="mt-2 text-center text-secondary small w-75 mx-auto">
              By creating an account you will agree Privacy Policy and Terms of
              Conditions
            </div>
          </div>
        ) : (
          <div className={styles.box}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5 text-center form-group">
              <button
                onClick={handleRegister}
                className="btn btn-primary-2 py-2 px-4 w-50 "
              >
                Continue
              </button>
            </div>
            <div className="mt-2 text-center text-secondary small w-75 mx-auto">
              By creating an account you will agree Privacy Policy and Terms of
              Conditions
            </div>
          </div>
        )}
      </div>
    </Loader>
  )
}

export default LoginBox
