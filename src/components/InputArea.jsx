import React from 'react';


function InputArea(props) {
  return   <input
              id="search-box"
              type="text"
              name="search-box"
              placeholder="search..."
              onInput={props.onSearch}
              className="search-box"
            />

}

export default InputArea;
