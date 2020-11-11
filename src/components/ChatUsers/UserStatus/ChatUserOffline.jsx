import React, { Component } from 'react';

class ChatUserOffline extends Component {
	render() {
		return (
			<li>
				<img src="https://i.imgur.com/gXyIqRMs.png" alt="" />
				<div>
					<h2>John Smith</h2>
					<h3>
						<span className="chatStatus orange"></span>offline
					</h3>
				</div>
			</li>
		);
	}
}

export default ChatUserOffline;