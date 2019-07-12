import React from 'react'
import PropTypes from 'prop-types'
import './card.styles.css'

const Card = ({ monster }) => (
  <div className="card-container">
    <img src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} alt="monster" />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
)

Card.propTypes = {
  monster: PropTypes.string,
}.isRequired

export default Card
