import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram, faTiktok, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const {themeState} = useContextGlobal()
  return ( 
    <footer className={themeState.footer}>
      <p>Powered by</p>
      <img src={'./images/DH.png'}/>
      <a href="https://www.youtube.com/" className="youtube social"> <FontAwesomeIcon icon={faYoutube} size="2x" /> </a>
      <a href="https://www.facebook.com/" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
      <a href="https://www.twitter.com/" className="twitter social"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
      <a href="https://www.instagram.com/" className="instagram social"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
      <a href="https://www.instagram.com/" className="tiktok social"> <FontAwesomeIcon icon={faTiktok} size="2x" /> </a>
      <a href="https://www.instagram.com/" className="wp social"> <FontAwesomeIcon icon={faWhatsapp} size="2x" /> </a>
      </footer>   
  )
}

export default Footer
