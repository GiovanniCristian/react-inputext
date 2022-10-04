import React from 'react'

const input = (inputType, minLenght, maxLenght, inputValue) => {

    

  return (
    <input
    type={inputType}
    value={inputValue}
    minLenght={minLenght}
    maxLenght={maxLenght}
    ></input>
  )
}

export default input
