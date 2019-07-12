import React from 'react'
import './search-box.styles.css'
import PropTypes from 'prop-types'

const SearchBox = ({ placeholder, handleChange }) => (
  <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
)

SearchBox.propTypes = {
  placeholder: PropTypes.string,
}.isRequired

export default SearchBox
