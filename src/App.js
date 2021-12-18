import React from "react";
import users from "./data/users.json";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      {users.map(({ name, about, linktoGithub, isSuperUser }) => (
        <Profile
          name={name}
          about={about}
          linktoGithub={linktoGithub}
          isSuperUser={isSuperUser}
        />
      ))}
    </div>
  );
};

export default App;
