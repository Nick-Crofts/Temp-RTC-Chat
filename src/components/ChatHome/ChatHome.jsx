import React, { Component } from 'react';
import ChatUsers from '../ChatUsers/ChatUsers';
import ActiveChat from '../ActiveChat/ActiveChat';
import "./ChatHome.css";

class ChatHome extends Component {
    render() {
        return (
            <div>
                <div id='chatContainer'>

                    <ActiveChat />
                    <ChatUsers />

                </div>
            </div>
        );
    }
}

export default ChatHome;