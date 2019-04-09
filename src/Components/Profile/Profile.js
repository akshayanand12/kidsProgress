import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="kids-profile">
                <img src="" alt="kids profile" />
                <ul>
                    <li>Name</li>
                    <li>Age</li>
                    <li>Address</li>
                </ul>
            </div>
        );
    }
}

export default Profile;