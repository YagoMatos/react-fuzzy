import React from 'react'

import Aux from '../../hoc/Aux'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'
import './Layout.css'

const layout = (props) => (
  <Aux>
    <Header />
    <div className='content-main'>{props.children}</div>
    <Footer />
  </Aux>
)

export default layout
