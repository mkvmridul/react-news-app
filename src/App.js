import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import NewsFeed from "./containers/NewsFeed/NewsFeed";

class App extends Component {
  state = {
    api_contents: []
  };
   componentDidMount() {
    fetch("https://librarian.onefootball.com/es/homestream")
      .then(res => res.json())
      .then(data => {
        this.setState({ api_contents: data.data.items });
        // console.log(data.data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <Layout>
        <NewsFeed api_contents={this.state.api_contents}></NewsFeed>
      </Layout>
    );
  }
}

export default App;
