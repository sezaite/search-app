import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import { isValidCharacter, isValidInputLength } from './helpers/isValidKeyword';
import getArticles from './helpers/getArticles';
import Loader from './Loader';

function Search() {
    const [articles, setArticles] = useState({ isFetching: true, articles: [] });
    const [message, setMessage] = useState("There is nothing to display yet");
    const [keywords, setKeywords] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function getData() {
        //nunulinti paieskos rez
        const response = await getArticles();
        setArticles({ isFetching: false, articles: response });
    }

    useEffect(() => {
        setMessage(articles.length > 0 ? "" : "There are no results matching your request")
    }, [articles]); //nezinau, cia gal reikes padaryti ne po articles pasikeitimo, o ant submito

    const search = (e) => {
        e.preventDefault();
        if (keywords === "") {
            setErrorMessage("Please enter your keywords!");
            return;
        }
        if (!isValidCharacter(keywords)) {
            setErrorMessage("Invalid characters");
            return;
        }
        if (!isValidInputLength(keywords)) {
            setErrorMessage("Input is too long");
            return
        }
        getData();
    }

    return (
        <div className="articles-page">
            <div className="search-bar">
                <h2>Search for articles</h2>
                {errorMessage !== "" && <h4 className="error-msg">{errorMessage}</h4>}
                <form action="">
                    <div className="input">
                        <input type="text" placeholder="Type what you are looking for..." onChange={e => setKeywords(e.target.value)} value={keywords} />
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                    </div>
                    <button className="btn" onClick={search}>Search</button>

                </form>
            </div>
            {articles.isFetching ? <Loader /> : articles.articles.length < 1 ? <h3 className="empty-list">{message}</h3> : <List data={articles.articles} />}

        </div>
    )
}

export default Search
