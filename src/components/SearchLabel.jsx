import React from 'react';


function SearchLabel(props) {
  const{name, stock} = props.data;
  return (
        <h2 className="search-label">{name} {stock}</h2>
    );
}
export default SearchLabel;
