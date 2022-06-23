import React from "react";
import Layaout from "./components/Layaout";
import Profile from "./components/Profile";
import { ResetCSS } from "./Global/Resetcss";


const App = () => {
  return (

    <main>
      <ResetCSS />
      <Layaout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
        <div></div>
      </Layaout>

    </main>
  );
}

export default App;
