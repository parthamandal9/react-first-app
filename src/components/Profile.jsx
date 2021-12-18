import React from "react";

function Profile() {
  const name = "Partha Mandal";
  const linktoGithub = "https://www.github.com/webformulator";
  const about =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate.";
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <a href={linktoGithub}>Github</a>
    </div>
  );
}

export default Profile;
