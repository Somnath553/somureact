// import { useState } from "react/cjs/react.production.min"
import React, { useState} from "react";
// import {toast} from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
export default function TextForm(props) {
  // toast.configure()

  const handle = (event) => {
    k(t1);
    t2(event.target.value);
  };
  const toUpper = () => {
    toast.success("Sucessfully converted to uppercase" , {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    t2(t1.toUpperCase());
  };
  const toLower = () => {
    toast.success("Sucessfully converted to lower case", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    t2(t1.toLowerCase());
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = t1;
    window.speechSynthesis.speak(msg);
    toast.success("Speaking", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const rmspace = () => {
    k(t1);
    let newt=t1.split(/[  ]+/);
    t2(newt.join(" "));
    toast.info(" Extra space removed", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    
  };
  const copy = () => {
    navigator.clipboard.writeText(t1);
    if (t1 !== "") {
      toast.info("text copied:: " + t1, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  const Undo = () => {
    toast.warn("Undo", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    console.log(j);
    t2(j);
  };
  const Clear = () => {
    k(t1);
    if (t1 !== "") {
      toast.error("text cleared", { position: toast.POSITION.BOTTOM_RIGHT });
    }

    t2("");
  };
  
    // useEffect(Run(),[])
    const [post, setPost] = React.useState(null);
   const run=()=>{
    axios
      .post("https://api.jdoodle.com/v1/execute", {
        clientId: "c6b44ba72a443b9f93204b1325b658c4",
    clientSecret:"1e1ad3d6b88639863b5d50999d782903dcf6e0ce923a0ced883bb9e578e2b1ef",
    script : t1,
    language: "java",
    versionIndex: "4"
      })
      .then((response) => {
        setPost(response.data);
      });
      o2(post.output);
   }
  
  const [t1, t2] = useState("text here");
  const [o1, o2] = useState("text here");
  const [j, k] = useState("text here");

  return (
    <>
    
      <div className="container">
      <h1 className={`${props.togf}`}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control forf ${props.togf}`}
          id="mybox"
          value={t1}
          onChange={handle}
          rows="5"
        ></textarea>
      </div>
      </div>
      <div className="container ct">
      <button className="btn btn-outline-success" onClick={toUpper}>
        To upper case
      </button>
      <button className="btn btn-outline-success" onClick={toLower}>
        To lower case
      </button>
      <button className="btn btn-outline-success" onClick={speak}>
        Speak
      </button>
      <button className="btn btn-outline-info" onClick={rmspace}>
        Remove extra space
      </button>
      <button className="btn btn-outline-info" onClick={copy}>
        copy
      </button>
      <button className="btn btn-outline-warning" onClick={Undo}>
        Undo
      </button>
      <button className="btn btn-outline-danger" onClick={Clear}>
        Clear
      </button>
      <button className="btn btn-outline-danger" onClick={run}>
        Run
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={`${props.tost}`}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover="true"
      />
      </div>
      <div className="container my-3">
        <h1 className={`${props.togf}`}>OutPut</h1>
        <p className={`${props.togf}`} >{o1}</p>
        <h1 className={`${props.togf}`}>Text Summary</h1>
        <p className={`${props.togf}`} >{t1.split(' ').length-1} words {t1.length}characters</p>
        <h2 className={`${props.togf}`}>Preview</h2>
        <p className={`${props.togf}`}>{t1}</p>
      </div>
      
    </>
  );
}
