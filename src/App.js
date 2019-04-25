import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    reddit: []
  }

  componentDidMount(){
    let uri = 'https://www.reddit.com/r/all.json'
    fetch(uri)
      .then(function(data){
        return data.json();
        })
      .then(function(data){
        return (this.setState({reddit:data.data.children.map(child => child.data)}));
        })
  }

  render() {
    return (
      <div>
        This is a test
      </div>
    );
  }
}

export default App;
