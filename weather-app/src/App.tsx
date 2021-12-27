import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import Body from "./components/body/Body";
import SideBar from "./components/sidebar/Sidebar";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <main className="container">
        <SideBar />
        <Body />
      </main>
    </Provider>
  );
}

export default App;
