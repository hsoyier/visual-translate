import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = props => {
  return (
    <div className="searchForm">
      <form onSubmit={props.searchGiphy} > 
        <input className="search-input" type="text" name="searchGiphy" placeholder="Search Giphy!!" />
        <input className="search-button" type="submit"  value="Search" />
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  searchGiphy: PropTypes.func,
}

export default SearchForm
