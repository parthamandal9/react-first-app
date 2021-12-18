import React from "react";
import users from "./data/users.json";
import Profile from "./components/Profile";

const App = () => {
  const headingStyle = {
    color: "red",
  };

  return (
    <>
      <h1 style={headingStyle}>Users</h1>
      {users.map(({ name, about, linktoGithub, isSuperUser }) => (
        <Profile
          name={name}
          about={about}
          linktoGithub={linktoGithub}
          isSuperUser={isSuperUser}
        />
      ))}
      <small>End of List</small>
    </>
  );
};

export default App;
