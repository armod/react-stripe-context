import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(true)
  }
  const openSubmenu = () => {
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(true)
  }

  return (
    <AppProvider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
      }}
    >
      {children}
    </AppProvider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
