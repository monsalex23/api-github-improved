import React from "react";
import Layaout from "./components/Layaout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import { ResetCSS } from "./Global/Resetcss";


const App = () => {
  return (

    <main>
      <ResetCSS />
      <Layaout>
        <Profile />
        <Repositories />
      </Layaout>

    </main>
  );
}

export default App;
