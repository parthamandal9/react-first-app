import React from "react";

function Profile({
  name = "Dilshad",
  about = "About Dilshad",
  linktoGithub = "https://www.github.com/webformulator",
  isSuperUser,
}) {
  return (
    <div>
      <h3>
        {name} {isSuperUser ? "^" : ""}
      </h3>
      <p>{about}</p>
      <a href={linktoGithub}>Github</a>
    </div>
  );
}

export default Profile;
