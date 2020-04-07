import React from 'react';

const NewsSearch = (props) => {
    return(
      <form className="news-form">
      <input type="text" placeholder="Search..." onChange={props.onSearchSubmit}/>
      </form>
    )
}

export default NewsSearch;
