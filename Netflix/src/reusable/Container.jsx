import React from 'react'

const Container=(props)=> {
    const { children , showPassword } = props
  return (
    <div className={showPassword}>{children}
    </div>
  )
}
export default Container;
