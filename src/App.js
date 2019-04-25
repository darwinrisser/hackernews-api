import React from 'react';
import PaperSheet from './PaperSheet'
import './App.css';

class App extends React.Component {
  state = {
    stories: []
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(data => data.json())
        .then(data => {
          const formattedData = data.slice(0,30);
          formattedData.forEach((id) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(newsData => newsData.json())
                .then(newsData => {
                    this.setState({stories: [...this.state.stories, newsData]})
                    console.log(this.state.stories)
                })
          })
        })
  }

  render() {

    const renderStories = this.state.stories.map((item, index) => {
      return <PaperSheet key={index} title={item.title} url={item.url} author={item.by} comments={item.descendants}/>
    })

    return (
      <div className="App">
        <h1>Hacker News</h1>
        {renderStories}
      </div>
    );
  }
}

export default App;
