import React from "react";
import { Provider } from "react-redux"; // it wrapped all the components
import store from "./store"; //all the states are stored here
import Todo from "./Todo";
function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
