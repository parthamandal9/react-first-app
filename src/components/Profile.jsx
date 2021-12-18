import React from "react";

function Profile(props) {
  const { name, about, linktoGithub } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <a href={linktoGithub}>Github</a>
    </div>
  );
}

export default Profile;
