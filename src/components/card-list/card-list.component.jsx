import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../card/card.component'
import './card-list.styles.css'

export default class CardList extends Component {
  render() {
    const { monsters } = this.props
    return (
      <div className="card-list">
        {monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    )
  }
}

// export const CardList = props => <div className="card-list">{props.children}</div>

CardList.propTypes = {
  monsters: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired

// export default CardList
