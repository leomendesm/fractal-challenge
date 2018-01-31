import React from 'react'
import styles from '../stylesheets/components/beer.scss'
const Beer = ({name, tagline, description, image, showDescription}) => (
  <div className={styles.panel}>
    <h1 className={styles.name}>{name}</h1>
    <p className={styles.tagline}>{tagline}</p>
  </div>
)

export default Beer
