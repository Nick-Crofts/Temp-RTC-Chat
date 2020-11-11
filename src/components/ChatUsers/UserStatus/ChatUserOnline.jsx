import React, { Component } from 'react';

class ChatUserOnline extends Component {
	render() {
		return (
			<li>
				<img src="https://i.imgur.com/gXyIqRMs.png" alt="" />
				<div>
					<h2>Jane Doe</h2>
					<h3>
						<span className="chatStatus green"></span>online
					</h3>
				</div>
			</li>
		);
	}
}

export default ChatUserOnline;