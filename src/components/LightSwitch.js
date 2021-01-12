import React from 'react';
 
class LightSwitch extends React.Component {
  state = {
      toggledOn: false
    };
 
  // when handleClick is called, setState will update the state so that toggledOn is reversed with "!"
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggledOn: !previousState.toggledOn
      }
    })
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggledOn ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
 
export default LightSwitch;
