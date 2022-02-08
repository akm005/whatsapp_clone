import React, { Component } from 'react';

class MessageListitem extends Component {
    render() {
        let {user,message} = this.props;

        return (
           <div className="list--item " onClick={ (event) => { this.props.getChats(event, user.id) } }>
              <div className="list--item__image">
                  <img src={user.profilePhoto} alt={user.name}/>
              </div>
              <div className="list--item__details d-flex flex-column " >
                  <span ><strong>{user.name}</strong></span>
                  <span>{message}</span>
              </div>
          </div>
        )
    }
}

export default MessageListitem;