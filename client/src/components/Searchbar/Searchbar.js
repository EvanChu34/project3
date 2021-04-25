import React, {Component} from 'react';

function SearchBar(props){
    return(
        <div>
            <input onChange={props.handleInput} type="text"/>
        </div>
    )
}

export default SearchBar;