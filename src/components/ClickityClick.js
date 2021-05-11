import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
  
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    })
  };
  
  
  render() {
    return (
      <div>
        <p>I was {this.state.hasBeenClicked ? null : 'not'} clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
      );
  }
}

export default ClickityClick;
