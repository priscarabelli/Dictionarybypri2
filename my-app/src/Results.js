import React from "react";

import "./Results.css"

export default function Results(props) {
  console.log({props})
  if (props.results) {
    return (
      <div className="Results">
        <section> 
        <h2>{props.results.word}</h2>
        <h4>/ {props.results.phonetic} /</h4>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
          
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}