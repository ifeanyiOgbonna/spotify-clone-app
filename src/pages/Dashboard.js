import axios from "axios";
import { useEffect } from "react";
import "../App.css";
import { LeftMenu } from "../component/LeftMenu";
import { MainMenu } from "../component/MainMenu";
import { RightMenu } from "../component/RightMenu";

function Dashboard() {
  useEffect(() => {
    const token = window.location.hash.split("=")[1]
    console.log(token)

    return () => {};
  }, []);

  return (
    <div className="App">
      <LeftMenu />
      <RightMenu />
      <MainMenu />
    </div>
  );
}

export default Dashboard;
