import React from "react";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import { configStore } from "./components/C-Store/configStore";
import './App.css';

const myStore = configStore()
function App() {
  return (
    <Provider store={myStore}>
          <Landing />
    </Provider>
  );
}

export default App;
