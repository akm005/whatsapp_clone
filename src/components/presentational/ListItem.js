import React, { Component } from "react";

class ListItem extends Component {
    render(){
      let item = this.props.item;
      return (
         <div className="list--item " onClick={ (event) => { this.props.getChats(event, item.id) } }>
            <div className="list--item__image">
                <img src={item.profilePhoto} alt={item.name}/>
            </div>
            <div className="list--item__details d-flex flex-column " >
                <span ><strong>{item.name}</strong></span>
                <span>{item.lastMessage}</span>
            </div>
        </div>
      )
    }
}


export default ListItem;