import { Component } from "react";

import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class App extends Component {
  usersContext = { users: DUMMY_USERS };

  render() {
    return (
      <UsersContext.Provider value={this.usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Users />
//     </div>
//   );
// }

export default App;
