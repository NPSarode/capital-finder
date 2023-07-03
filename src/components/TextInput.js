import React, { useState } from "react";
import list from "./Data";

export default function TextInput() {
  const [text1, setText1] = useState("Enter here...");
  const [text2, setText2] = useState("Welcome...");

  const show = () => {
    let name = text1.toUpperCase();
    let flag = 0;
    
    for(let i in list){

        if(name === i){
            setText2(list[i] + " is the capital of " + text1 + ".");
            flag = 1;
            break;
        }
        else if(name === ""){
            setText2("");
        }
    }

    if(flag === 0){
        alert("Not a country (check spelling, avoid uneccessary spacing)");
    } 
};

  const clear = (e) => {
    setText1("");
    setText2("Try more?");
  };

  const changeText = (e) => {
    setText1(e.target.value);
  };

  return (
    <div className="container-flex TextInp">
      <div>
        <div className="mb-3 my-5 mx-4">
          <input
            type="text"
            id="myBox"
            className="myInput"
            onChange={changeText}
            value={text1}
          />
          <button
            type="button"
            className="btn btn-outline-primary mx-1 bt"
            onClick={show}
          >
            Find
          </button>
          <button
            type="button"
            className="btn btn-outline-primary bt"
            onClick={clear}
          >
            Clear
          </button>
        </div>
        <div className="mb-3  mx-4 py-5"><h2>{text2}</h2></div>
      </div>
    </div>
  );
}
