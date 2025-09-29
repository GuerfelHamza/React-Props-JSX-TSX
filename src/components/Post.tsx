import React from "react";
import "../App.css"; // chemin relatif
import { JSX } from "react/jsx-runtime";
// plus besoin de JSX import

export default function Post(props:any): JSX.Element {
  console.log("the props are ",props)
  return (
    <div className="post">
      <h2>{props.name}</h2>
      <hr className="my-hr" />
      <h4>{props.email} </h4>
      {props.children}
    </div>
  );
}
