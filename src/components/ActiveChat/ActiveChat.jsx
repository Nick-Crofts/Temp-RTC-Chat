import React, { Component } from 'react';

class ActiveChat extends Component {
    render() {
        return (
            <main>
                <header>
                    <img src="https://i.imgur.com/gXyIqRMs.png" alt="" />
                    <div>
                        <h2>John Doe</h2>
                        <h3>17 messages</h3>
                    </div>
                    <span className="chatStatus green"></span>
                </header>
                <ul id='chatMain'>
                    <li className="you">
                        <div className="chatBubble">
                            <span className="chatStatus green"></span>
                            <h2>John</h2>
                            <h3>10:12AM, Today</h3>
                        </div>
                        <div className="chatBubbleTriangle"></div>
                        <div className="chatMessage">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                    </li>
                    <li className="me">
                        <div className="chatBubble">
                            <h3>10:12AM, Today</h3>
                            <h2>Me</h2>
                            <span className="chatStatus greenChat"></span>
                        </div>
                        <div className="chatBubbleTriangle"></div>
                        <div className="chatMessage">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                    </li>
                    <li className="me">
                        <div className="chatBubble">
                            <h3>10:12AM, Today</h3>
                            <h2>Me</h2>
                            <span className="chatStatus greenChat"></span>
                        </div>
                        <div className="chatBubbleTriangle"></div>
                        <div className="chatMessage">cool</div>
                    </li>
                    <li className="you">
                        <div className="chatBubble">
                            <span className="chatStatus green"></span>
                            <h2>John</h2>
                            <h3>10:12AM, Today</h3>
                        </div>
                        <div className="chatBubbleTriangle"></div>
                        <div className="chatMessage">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                    </li>
                    <li className="me">
                        <div className="chatBubble">
                            <h3>10:12AM, Today</h3>
                            <h2>Me</h2>
                            <span className="chatStatus greenChat"></span>
                        </div>
                        <div className="chatBubbleTriangle"></div>
                        <div className="chatMessage">Hmm ... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
                    </li>
                    <li className="me">
                        <div className="chatBubble">
                            <h3>10:12AM, Today</h3>
                            <h2>Me</h2>
                            <span className="chatStatus greenChat"></span>
                        </div>
                        <div className="chatBubbleTriangle"></div>
                        <div className="chatMessage">Cool?</div>
                    </li>
                </ul>
            </main>
        );
    }
}

export default ActiveChat;