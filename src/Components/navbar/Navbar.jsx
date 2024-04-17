// import React from 'react'

import "./navbar.scss"
import flag from "../../assets/image.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={flag} alt="American Flag" className="navbar__image" />
    </div>
  )
}

export default Navbar