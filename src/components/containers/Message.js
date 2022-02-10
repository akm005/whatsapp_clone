import React, { Component } from 'react';
import MessageListitem from '../presentational/MessageListitem';

class Message extends Component {
	render() {
		let msgitem = this.props.messages.map((item) => {
			return <MessageListitem user={item.user} key={item.uuid} getChats={ this.props.getChats } message={item.chat} celement={this.props.celement}/>
		})
		return(
			<div className="">
				{msgitem}
			</div>
		)
	}
}

export default Message;