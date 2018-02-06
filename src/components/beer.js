import React from 'react'
import styles from '../stylesheets/components/beer.scss'
import { Link } from 'react-router-dom'
const Beer = ({name, tagline, description, image, showDescription, disabled, handlerClick}) => {
  const panel = []
  panel.push(styles.panel)
  if (showDescription) panel.push(styles.active)
  if (disabled) panel.push(styles.hidden)
  return (
    <div className={panel.join(' ')} onClick={handlerClick}>
      <img alt='beer logo' src={image} />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.tagline}>{tagline}</p>
      <p className={styles.description}>{description}</p>
      <Link to='/buy' className={styles.button} href='#'>Compre agora</Link>
    </div>
  )
}

export default Beer
