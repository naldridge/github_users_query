import React from 'react';
//import SearchForm from './SearchForm';

function UserCardList({users}) {

    return (
        <div>
            {users.map((user, index) => {
                return(
                    <div key={index}>
                    <h2>{user.name}</h2>
                    </div>


            )})}
        </div>
    )
    /* props.users.map(user => {
        this.setState = {
            name: props.users.name,
            img_url: props.users.avatar_url,
            profile_url: props.users.html_url
        };

    }) */

}



export default UserCardList;