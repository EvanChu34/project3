import React, { Component } from 'react';

function SearchBar(props){
    return(
        <form action="/Home" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Items</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Items"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    )
}

export default SearchBar;