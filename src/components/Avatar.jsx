import React from "react";
import contacts from "../contacts";

function Avatar(props) {
    return (
        <img className="circle-img" src={props.img} alt="avatar.img" />
    );
}

export default Avatar;