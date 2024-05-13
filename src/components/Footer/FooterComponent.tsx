import React from 'react'
import style from './Footer.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.png'

function FooterComponent() {
  return (
    <footer>        
      <div className={style.footerContainer}>
        <div className={style.container}>

        <div className={style.adress}>
          <div className={style.containerLogoAndName}>
        
               <h1 className={style.nodleat}>NoodlEat</h1>
               <img className={style.logo} src={logo} />
          </div>
          David Bloch St 32, <br />
          Tel Aviv-Yafo, Israel
        </div>
        <div className={style.company}>
          <h1 className={style.hStyle}>Company</h1>
          <a>About Us</a>
          <a>Career</a>
          <a>How It Works</a>
        </div>
        <div className={style.policy}>
         <h1 className={style.hStyle} >Policy</h1>
          <a>FAQ</a>
          <a>Privacy</a>
          <a>Shipping</a>
        </div>
        <div className={style.getintouch}>
          <h1 className={style.hStyle}>Get In Touch</h1>
          <a>+972 327 3274 84</a>
          <a>mail@mail.com</a>
       
        </div>

        </div>
      </div>
    </footer>
  )
}

export default FooterComponent