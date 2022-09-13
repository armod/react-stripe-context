import React, { useState, useRef, useEffect } from 'react'
import { FaCentercode } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    //console.log(submenu)
  }, [location])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      submenu
    </aside>
  )
}

export default Submenu
