import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'
import './team.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FaceIcon from '@mui/icons-material/Face';



const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading title="Notre Équipe" subtitle="Rencontrez notre équipe dédiée, passionnée par l'analyse fiscale et la visualisation des données." />
          <div className="content mtop grid3 center">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <div className="details">
                  <h2>{val.name}</h2>


                  <ul>
                    <FacebookOutlinedIcon />
                    <LinkedInIcon />
                    <GitHubIcon />
                  </ul>
                  <div className="button flex">
                    <button>
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
