import React, { Component } from 'react';
import ChatUserOnline from './UserStatus/ChatUserOnline';
import ChatUserOffline from './UserStatus/ChatUserOffline';

class ChatUsers extends Component {
	render() {
		return (
			<aside>
				<header>
					<input type="text" placeholder="search" />
				</header>
				<ul>

					<ChatUserOnline />
					<ChatUserOffline />
					<ChatUserOnline />
					<ChatUserOnline />
					<ChatUserOnline />
					<ChatUserOffline />
					<ChatUserOnline />
					<ChatUserOnline />
					<ChatUserOffline />
					<ChatUserOnline />

				</ul>
				<footer>
					<textarea placeholder="Type your message ..."></textarea>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
					<a href="/">Send</a>
				</footer>
			</aside>
		);
	}
}

export default ChatUsers;