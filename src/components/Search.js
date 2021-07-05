import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return (
        <div className="articles-page">
            <div className="search-bar">
                <h2>Search for articles</h2>
                <form action="">
                    <div className="input">
                        <input type="text" placeholder="type what you are looking for" />
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                    </div>
                    <button className="btn">Search</button>
                </form>
            </div>

        </div>
    )
}

export default Search
