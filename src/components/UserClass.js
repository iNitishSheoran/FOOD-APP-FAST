import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
        twitter_username: "",
        html_url: ""
      }
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/iNitishSheoran");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });

      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { name, location, avatar_url, twitter_username, html_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location || "Not provided"}</h3>
        <h3>GitHub: <a href={html_url} target="_blank" rel="noopener noreferrer">{html_url}</a></h3>
        <h3>Twitter: @{twitter_username || "Not provided"}</h3>
      </div>
    );
  }
}

export default UserClass;
