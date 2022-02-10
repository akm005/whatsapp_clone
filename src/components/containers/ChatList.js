import React, { Component }     from 'react';
import ChatListHeader           from '../presentational/ChatListHeader';
import ChatListSearch           from './ChatListSearch';
import List                     from './List';
import Message from './Message';

class ChatList extends Component {
	render(){
		return(
			<div className="chatlist">
				<ChatListHeader />
				<ChatListSearch search={this.props.search} />
				<div className='list h-100 w-100'>
					{this.props.isSearchActive && this.props.contacts.contacts.length ? <div className='list--item'><span className='list--item__search w-100'>  CONTACTS </span></div>:''}
					<List contacts={this.props.contacts.contacts} getChats={this.props.getChats} celement={this.props.contacts.celement}/>

					{this.props.isSearchActive && this.props.contacts.messages.length ? <div className='list--item'><span className='list--item__search'> MESSAGES </span></div>:''}
					{this.props.isSearchActive && this.props.contacts.messages.length ? 
						<Message contacts={this.props.contacts.contacts} getChats={this.props.getChats} messages={this.props.contacts.messages} celement={this.props.contacts.celement}/>
						:''}
				</div>
			</div>
		)
	}
}

export default ChatList;