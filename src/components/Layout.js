import React from 'react'
import Navbar from './Navbar'
import NProgress from "nprogress"; // Importa NProgress para la barra de progreso
import nProgress from "nprogress"; // Importa nProgress, parece un error de duplicación

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}

export default Layout