import React from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Tecket = props => {
  return (
      <div>
          <Contact></Contact> 
          <home/>
          <Menu/>
    </div>
  )
}

Tecket.propTypes = {}

export default Tecket;