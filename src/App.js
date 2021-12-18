import React from "react";
import Profile from "./components/Profile";

const App = () => {
  const dilshadSuper = true;
  const parthaSuper = false;
  const shakilSuper = false;
  const deepakSuper = true;

  return (
    <div>
      <Profile
        name="Dilshad"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
        isSuperUser={dilshadSuper}
      />
      <Profile
        name="Partha"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
        isSuperUser={parthaSuper}
      />
      <Profile
        name="Shakil"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
        isSuperUser={shakilSuper}
      />
      <Profile
        name="Deepak"
        linktoGithub="https://www.github.com/webformulator"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat  nobis iure distinctio, epellat quidem laudantium quas ab inventore iste  doloremque repellendus, totam accusantium commodi fugit! Perferendis  ipsum et, quae officia aliquid quos cumque exercitationem animi eligendi  sint voluptatem sunt laudantium nobis, alias ratione repellat sed  aliquam ex quisquam? Cupiditate."
        isSuperUser={deepakSuper}
      />
    </div>
  );
};

export default App;
