import React from "react";
import Layaout from "./components/Layaout";

function App() {
  return (

    <main>
      <Layaout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/86568241?v=4" alt="Avatar of user" />
          <h1>Alex Monsalve</h1>
          <h3>UsrerName: </h3>
          <span>monsalex23</span>
          <div>
            <div>
              <h4>Follower</h4>
              <span>6</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>6</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>6</span>
            </div>
          </div>
        </div>
        <div>User</div>
        <div>Repositories</div>
        <div>Starreds</div>
        <div></div>
      </Layaout>

    </main>
  );
}

export default App;
