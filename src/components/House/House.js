import React from "react";
import "./House.css";

function House(props) {
  //   console.log(props);
  return (
    <div className="housecard">
      {/* <div>Property Name:{props.name}</div> */}
      <div>Property Name: {props.house.name} </div>
      <div>Address: {props.house.address} </div>
      <div>City: {props.house.city} </div>
      <div>State: {props.house.city} </div>
      <div>Zip: {props.house.zip} </div>
      <img className="pic" src={props.house.image_url} alt="House" />
      <button onClick={() => props.deleteHandler(props.house.id)}>
        Delete
      </button>
    </div>
  );
}

export default House;
