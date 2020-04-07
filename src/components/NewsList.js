import React from 'react';
import NewsItem from './NewsItem.js';

const NewsList = (props) => {
  if (props.stories == null || props.stories.length === 0) {
    return <p>Loading Top Stories...</p>;
  }

  if (props.searchValue){
    const filteredStories = props.stories.filter((story) => {
      return story.title.toLowerCase().includes(props.searchValue.toLowerCase())
    })
    return(
      filteredStories.map((newsItem) => {
        return <NewsItem author={newsItem.by} link={newsItem.url} key={newsItem.id}>{newsItem.title}</NewsItem>
      })
    )
  }

  return(
    props.stories.map((newsItem) =>{
      return <NewsItem author={newsItem.by} link={newsItem.url} key={newsItem.id}>{newsItem.title}</NewsItem>
    }
  )
)
}

export default NewsList;
