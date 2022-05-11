import React from 'react'
import styles from "../../styles/components/LoginBox.module.scss";
const LoginBox=()=>{
  return (
    <div className={styles.materialContainer}>


   <div className={styles.box}>

      <div className={styles.title}>LOGIN</div>

      <div className={styles.input}>
         <label for="name">Username</label>
         <input type="text" name="name" id="name"/>
         <span className={styles.spin}></span>
      </div>

      <div className={styles.input}>
         <label for="pass">Password</label>
         <input type="password" name="pass" id="pass"/>
         <span className={styles.spin}></span>
      </div>

      <div className={`${styles.button} ${styles.login}`}>
         <button><span>GO</span> <span className="icon-check-circle"></span></button>
      </div>

      <a href="" className={styles["pass-forgot"]}>Forgot your password?</a>

   </div>

   <div className={styles.overbox}>
      <div className="material-button alt-2"><span className={styles.shape}></span></div>

      <div className={styles.title}>REGISTER</div>

      <div className={styles.input}>
         <label for="regname">Username</label>
         <input type="text" name="regname" id="regname"/>
         <span className={styles.spin}></span>
      </div>

      <div className={styles.input}>
         <label for="regpass">Password</label>
         <input type="password" name="regpass" id="regpass"/>
         <span className={styles.spin}></span>
      </div>

      <div className={styles.input}>
         <label for="reregpass">Repeat Password</label>
         <input type="password" name="reregpass" id="reregpass"/>
         <span className={styles.spin}></span>
      </div>

      <div className={styles.button}>
         <button><span>NEXT</span></button>
      </div>


   </div>

</div>
  )
}

export default LoginBox; 