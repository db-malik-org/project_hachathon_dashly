import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Image } from "@mui/icons-material"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Avez-vous des questions ?</h1>
            </div>
            <button className='btn5'>Contactez-nous dès aujourd'hui</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <Image src='../images/logo-light.png' alt='' />
              <h2>Vous avez besoin d'aide ?</h2>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div key={index} className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Dashly</span>
      </div>
    </>
  )
}

export default Footer
