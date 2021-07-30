import React from "react";
import UserCardList from "./UserCardList";

function UserCard(props) {

    return (
        <>
            <h4>{props.user.name}</h4>
            <img src={props.user.img_url}></img>
            <a href={props.user.profile_url}>GitHub Profile</a>
        </>
    );
};


export default UserCard;