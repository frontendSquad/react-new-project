import React from 'react'
import { Link } from 'react-router-dom'
function BtnLink({LinkText, LinkClass, LinkPath}) {
  return (
    <Link to={LinkPath} className={LinkClass}>{LinkText}</Link>
  )
}



export default BtnLink
