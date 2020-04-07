import React from 'react';

const NewsItem = (props) => {
  return(
    <div>
    <h2><a href={props.link} target="_blank" rel="noopener noreferrer">{props.children}</a></h2>
    <h3>{props.author}</h3>
    <hr />
    </div>
  )
}

export default NewsItem;
