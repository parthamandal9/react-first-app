import React, { Fragment } from "react";
import users from "./data/users.json";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Fragment>
      <h1>Users</h1>
      {users.map(({ name, about, linktoGithub, isSuperUser }) => (
        <Profile
          name={name}
          about={about}
          linktoGithub={linktoGithub}
          isSuperUser={isSuperUser}
        />
      ))}
      <small>End of List</small>
    </Fragment>
  );
};

export default App;
