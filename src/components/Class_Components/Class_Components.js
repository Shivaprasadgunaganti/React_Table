import React, { Component } from "react";

import Cards from "../cards/Cards";

class ButtonComponent extends Component {
  state = {
    text1: "subscribe",
    text2: "subscribed",
    isSubscribed: false,
  };
  SubscribedHandler = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed,
    });
  };

  render() {
    return (
        <React.Fragment>
              <button onClick={this.SubscribedHandler}>
        {this.state.isSubscribed ? this.state.text2 : this.state.text1}
      </button>

      {
        this.state.isSubscribed?
        <>
        <h2>congrats</h2>
       <Cards/>
        </>
        :
        <h2>you have to subscribe</h2>
      }
        </React.Fragment>
    )
  }
}
export default ButtonComponent;
