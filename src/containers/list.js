import React, { Component } from 'react'
import { Beer } from '../components'

class List extends Component {
  render() { 
    return ( 
      <div>
        <Beer name="Beer" tagline="a nice beer" />
      </div> 
    )
  }
}
 
export default List