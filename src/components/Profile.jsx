import React from "react";

function Profile(props) {
  const name = props.name;
  const linktoGithub = props.linktoGithub;
  const about = props.about;
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <a href={linktoGithub}>Github</a>
    </div>
  );
}

export default Profile;
