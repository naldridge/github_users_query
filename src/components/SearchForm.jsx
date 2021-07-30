import React, { Component } from 'react';
//import UserCard from './UserCard';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            users: [],

        }
    }

    _handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `https://api.github.com/users/${this.state.username}`
        ).then(response => response.json());

        const newUserData = response;

        this.setState({
            users: [...this.state.users, newUserData],
        });
        console.log(this.state.users);

    };

    _handleChange = (field, val) => {
        this.setState({
            [field]: val,

        });
    }
    render() {

        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={(e) => {
                            this._handleChange('username', e.target.value)
                        }} />
                    </label>
                    <br />
                    <input type='submit' />
                </form>

                <UserCardList users={this.state.users}/>
            </div>
        );
    }
}

export default SearchForm;