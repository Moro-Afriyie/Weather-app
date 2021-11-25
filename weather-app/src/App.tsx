import React from "react";
import "./App.scss";
import Body from "./components/body/Body";
import SideBar from "./components/sidebar/Sidebar";

function App() {
  return (
    <main className="container">
      <SideBar />
      <Body />
    </main>
  );
}

export default App;
