import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import isValidKeyword from './helpers/isValidKeyword';
import getArticles from './helpers/getArticles';

function Search() {
    const [articles, setArticles] = useState([]);
    const [message, setMessage] = useState("There is nothing to display yet");
    const [keywords, setKeywords] = useState("");
    const [errorMessage, setErrorMessage] = useState(true);

    useEffect(() => {
        setMessage(articles.length > 0 ? "" : "There are no results matching your request")
    }, [articles]); //nezinau, cia gal reikes padaryti ne po articles pasikeitimo, o ant submito

    const search = (e) => {
        e.preventDefault();
        if (!isValidKeyword(keywords)) {
            setErrorMessage(true);
            return;
        }
        const data = getArticles(keywords);
        setArticles(data);
    }

    return (
        <div className="articles-page">
            <div className="search-bar">
                <h2>Search for articles</h2>
                {errorMessage && <h4 className="error-msg">Invalid characters!</h4>}
                <form action="">
                    <div className="input">
                        <input type="text" placeholder="Type what you are looking for..." onChange={e => setKeywords(e.target.value)} value={keywords} />
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                    </div>
                    <button className="btn" onClick={search}>Search</button>

                </form>
            </div>
            <h3 className="empty-list">{message}</h3> : <List />}
        </div>
    )
}

export default Search
