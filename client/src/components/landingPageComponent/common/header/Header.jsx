import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { Image } from "@mantine/core"

const Header = () => {
  const [navList, setNavList] = useState(false)
  const letsPlay = () => {
    window.location.href = "/dashboard"
  }
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <Image src='../../../../assets/landing/patients.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            
            <button onClick={letsPlay} className='btn1'>
              <i className='fa fa-sign-out'></i> Let's Play
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
