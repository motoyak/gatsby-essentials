import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({children}) => (
  <div>
    <Header/>
    {children}
    <Footer/>
  </div>
)

export default Layout