import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img className="avatar" src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.login}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
