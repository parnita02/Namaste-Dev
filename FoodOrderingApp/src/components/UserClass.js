import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="userAbout">
        <h1>count: {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          click
        </button>
        <h2> Name: {this.props.name}</h2>
        <h2>Location: Rewa, Madhya Pradesh</h2>
        <h2>Contact: parnitadwivedi02@gmail.com</h2>
      </div>
    );
  }
}
export default UserClass;
