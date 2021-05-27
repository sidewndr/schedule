import React, {useState} from 'react'
import styled from 'styled-components'

const Kvadratik = styled.div`
  width: 400px;
  height: 200px;
  background-color: black;
  position: absolute;
  right: -300px;
  transition: 1s;
  &.open {
    transform: translateX(-50%);
  }
`

export const Test = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <Kvadratik className={open ? 'open' : null} />
      <button
        onClick={handleClick}
        style={{
          width: '30px',
          height: '20px'
        }}
      />
    </>
  )
}
