import React, { Component }     from 'react';
import ChatListHeader           from '../presentational/ChatListHeader';
import ChatListSearch           from './ChatListSearch';
import List                     from './List';
import Message from './Message';

class ChatList extends Component {
    render(){
        console.log(this.props.contacts.messages, "-")
        return(
            <div className="chatlist">
            <ChatListHeader />
            <ChatListSearch search={this.props.search} />
            <div className='list h-100 w-100'>
            <span>
                {this.props.isSearchActive && this.props.contacts.contacts.length ? 'Contact ':''}
            </span>
            <List contacts={this.props.contacts.contacts} getChats={this.props.getChats}/>
            <span>
                {this.props.isSearchActive && this.props.contacts.messages.length ? 'Message ':''}
            </span>
            {this.props.isSearchActive && this.props.contacts.messages.length ? 
            <Message contacts={this.props.contacts.contacts} getChats={this.props.getChats} messages={this.props.contacts.messages}/>
            :''}
            </div>
            </div>
        )
    }
}

export default ChatList;