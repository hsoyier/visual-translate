import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = props => {
  return (
    <section className="search">
      <div className="searchForm">
        <input onChange={props.searchGiphy} className="search-input" type="text" placeholder="Search the word" />
      </div>
    </section>
  )
}

SearchForm.propTypes = {
  searchGiphy: PropTypes.func,
}

export default SearchForm
