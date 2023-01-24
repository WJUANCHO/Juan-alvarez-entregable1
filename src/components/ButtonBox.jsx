import React from 'react'

const ButtonBox = ({colorRandom, handleClick}) => {
  return (
    <button style={{background: colorRandom}} className="box__btn" on onClick={handleClick}>&#62;</button>
  )
}

export default ButtonBox