import React from "react";
import "./App.css";
import users from "./data/users.json";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <>
      <h1 className="heading">Users</h1>
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
