import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import ToggleButton from "./Components/ToggleButton";
import React, { useState } from "react";

function App() {
  
  const [on,off]=useState(0);
  const [navl,navd]=useState("light");
  const [tostt,setostt]=useState("colored");
  
  const tog=()=>{
    if(on===0)
    {
      off(1);
      navd("dark");
      setostt("dark");
      document.querySelector("body").style.backgroundColor ="#181a1b";
    }
    else{
      off(0);
      navd("light");
      setostt("colored");
      document.querySelector("body").style.backgroundColor ="white";

    }
  }
  return (
    <div className="cover">
    
      <Navbar title="My ReactApp" value={"1"} togf={navl} />
      <div className="container covers">
        <TextForm heading="My text area" togf={navl} tost={tostt} />
      </div>
      
      <ToggleButton onChange={tog} className="tg"  />
      
      
      </div>
  );
}

export default App;
 