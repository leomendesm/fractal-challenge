import React from 'react'

const Beer = ({name, tagline, description, image, showDescription}) => (
  <div>
    <h1>{name}</h1>
    <p>{tagline}</p>
  </div>
)

export default Beer
