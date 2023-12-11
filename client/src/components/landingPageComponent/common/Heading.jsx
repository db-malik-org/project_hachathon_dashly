import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
    </>
  )
}

export default Heading
