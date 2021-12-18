import React from "react";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <Profile
        name="Dilshad"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
        isSuperUser={true}
      />
      <Profile
        name="Partha"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
      />
      <Profile
        name="Shakil"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
      />
      <Profile
        name="Deepak"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
      />
    </div>
  );
};

export default App;
