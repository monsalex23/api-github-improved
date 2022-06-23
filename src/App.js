import React from "react";
import Layaout from "./components/Layaout";
import Profile from "./components/Profile";

const App = () => {
  return (

    <main>
      <Layaout>
        <Profile/>
        <div>Repositories</div>
        <div>Starreds</div>
        <div></div>
      </Layaout>

    </main>
  );
}

export default App;
