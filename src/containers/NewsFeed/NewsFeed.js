import React, { Component } from "react";
import Title from "../../components/Title/Title";
import IMG from "../../components/IMG/IMG";
import AUX from "../../HOC/Auxiliary/Auxiliary";
import LongDescription from "../../components/LongDescription/LongDescription";
import propTypes from "prop-types";

class NewsFeed extends Component {
  state = {
    longFlag: false,
    counter: 0,
    api_contents: this.props.api_contents[0]
  };

  static propTypes = {
    api_contents: propTypes.array.isRequired
  };

  LongContentHandler = () => {
    this.setState({
      longFlag: true
    });
  };
  RemLongContentHandler = () => {
    this.setState({
      longFlag: false
    });
  };

  getSafe = (fn, defaultVal) => {
    try {
      return fn();
    } catch (e) {
      return defaultVal;
    }
  };

  incrementCounter = () => {
    if (this.state.counter < this.props.api_contents.length - 1) {
      this.setState({
        counter: this.state.counter + 1
      });
    } else {
      alert("No more News");
    }
  };

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    } else {
      alert("No previous News");
    }
  };

  render() {
    return (
      <AUX>
        <Title>
          {this.getSafe(
            () => this.props.api_contents[this.state.counter].title,
            "No Title"
          )}
        </Title>
        <hr></hr>
        <IMG
          srcImage={this.getSafe(
            () => this.props.api_contents[this.state.counter].images.large,
            "../some_default_image"
          )}
          shortDescription={this.getSafe(
            () =>
              this.props.api_contents[this.state.counter].content_parts[0]
                .content,
            ""
          )}
          clickDetail={this.LongContentHandler}
        ></IMG>
        <hr></hr>
        <LongDescription
          show={this.state.longFlag}
          clickRem={this.RemLongContentHandler}
        >
          {this.getSafe(
            () => this.props.api_contents[this.state.counter].content,
            "../some_default_image"
          )}
        </LongDescription>
        <button className="btn btn-dark" onClick={this.decrementCounter}>
          Previous
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-outline-dark"
          onClick={this.incrementCounter}
          counter={this.state.counter}
        >
          Next
        </button>
      </AUX>
    );
  }
}
export default NewsFeed;
