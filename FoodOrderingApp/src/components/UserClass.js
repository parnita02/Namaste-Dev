import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "abc",
        location: "xyz",
        avatar_url: "",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/parnita02");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="userAbout">
        {/* <h1>count: {this.state.count}</h1> */}
        {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          click
        </button> */}
        <img src={avatar_url} />
        <h2> Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
export default UserClass;
