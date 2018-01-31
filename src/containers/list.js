import React, { Component } from 'react'
import { Beer } from '../components'
import styles from '../stylesheets/containers/list.scss'

class List extends Component {
  render() { 
    return ( 
      <div className={styles.list}>
        <Beer name="Beer" tagline="a nice beer" />
        <Beer name="Beer" tagline="a nice beer" />
        <Beer name="Beer" tagline="a nice beer" />
        <Beer name="Beer" tagline="a nice beer" />
      </div> 
    )
  }
}
 
export default List