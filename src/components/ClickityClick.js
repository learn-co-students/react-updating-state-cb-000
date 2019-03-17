import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    
    //Initial state
    this.state = {
      hasBeenClicked: false
    };
  }
  
  handleClick = () => {
    // Update state
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
    // Function passed in after state properties will be called after the state is updated
  }
  
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick;
