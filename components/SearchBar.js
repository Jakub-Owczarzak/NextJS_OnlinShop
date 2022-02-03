import React, { useState } from 'react';
import PropTypes from 'prop-types';

import searchBarSyles from '../styles/Searchbar.module.css'

const SearchBar = ({ productsToFilter, filterhandler, results, resultHandler }) => {
    const [inputValueState, setInputvalueState] = useState('');

    const handleSearchProducts = (e) => {
        setInputvalueState(e.target.value);
        const results = productsToFilter.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        resultHandler(results)
        if (e.target.value.length === 0) {
            resultHandler(productsToFilter)
        }

    }
    return (
        <div className={searchBarSyles.searchBarWrapper}>
            <input value={inputValueState} type="text" placeholder="Search Products" onChange={handleSearchProducts} />
        </div>
    )

};


export default SearchBar;
