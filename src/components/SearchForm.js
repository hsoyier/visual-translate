import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = props => {
  return (
    <div>
      <form onSubmit={props.searchGiphy} > 
        <input type="text" name="searchGiphy" />
        <input type="submit" value="search" />
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  searchGiphy: PropTypes.func,
}

export default SearchForm
