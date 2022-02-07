import React, { Component } from 'react';
import ChatDetailFooter from './ChatDetailFooter';
import ChatDetailHeader from './ChatDetailHeader';
class ViewChatHistory extends Component{
    render(){
        console.log(this.props.selectedContactChat);
        return(
            <div className="view--chat" style={{"display": "flex", "flexGrow": "1","flexDirection": "column" }}>
              <ChatDetailHeader selectedContactChat={this.props.selectedContactChat} />
              <ChatDetailFooter />

            </div>
        )
    }
}

export default ViewChatHistory;