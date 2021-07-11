import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import { isValidCharacter, isValidInputLength } from './helpers/isValidKeyword';
import getArticles from './helpers/getArticles';
import Loader from './Loader';
import axios from 'axios';

function Search() {
    const [articles, setArticles] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    // const [message, setMessage] = useState("There is nothing to display yet");
    // const [searchInput, setSearchInput] = useState("");
    const [keywords, setKeywords] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //errors on submit:

    const search = async (e) => {
        // axios.get('localhost:9000').then(res => {
        //     console.log(res);
        // }).catch((err) => {
        //     console.log(err);
        // });
        e.preventDefault();
        setIsFetching(true);
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
        getArticles(keywords.split(" ")).then(res => {
            console.log(res.articles);
            setErrorMessage("");
            setKeywords([]);
            setArticles(res.articles);
            setIsFetching(false);
        }).catch(err => {
            console.log(err);
            setIsFetching(false);
            setErrorMessage("There was a request error");
        });

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
            {isFetching && keywords !== "" ? <Loader /> : <List data={articles} />}

        </div>
    )
}

export default Search
