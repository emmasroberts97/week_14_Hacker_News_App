import React from 'react';
import NewsList from '../components/NewsList.js';
import NewsSearch from '../components/NewsSearch.js';

class NewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topNewsIDs: [],
      newsInformation: [],
      searchValue: ""
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount(){
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url)
    .then(res => res.json())
    .then(stories => {this.setState({ topNewsIDs: stories})
    this.getAllStorieDetails()})
    .catch(err => console.error)
  }

  getAllStorieDetails(){
    const promises = this.state.topNewsIDs.map(num => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${num}.json`)
      .then(res => res.json());
    });
    Promise.all(promises)
    .then(data => this.setState({newsInformation: data.flat()}))
  }

  onSearchSubmit(event){
    this.setState({searchValue: event.target.value});
  }

  render(){
    return (
      <div>
      <h1>Hacker News Top Stories</h1>
      <NewsSearch onSearchSubmit={this.onSearchSubmit} />
      <NewsList stories={this.state.newsInformation} searchValue={this.state.searchValue}/>
      </div>
  )}
}

export default NewsContainer;
