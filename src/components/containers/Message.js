import React, { Component } from 'react';
import MessageListitem from '../presentational/MessageListitem';

class Message extends Component {
    render() {
        console.log(this.props)
        let msgitem = this.props.messages.map((item) => {
            return <MessageListitem user={item.user} key={item.user.id} getChats={ this.props.getChats } message={item.chat}/>
        })
        return(
            <div className="list">
                {msgitem}
            </div>
        )
    }
}

export default Message;