import React, { Component } from "react";
import Readstatus from "../containers/Readstatus";
import Highlighter from "../presentational/Highlighter"

class ContactListItem extends Component {
	render(){
		let item = this.props.item;
		return (
			<div className="list--item " onClick={ (event) => { this.props.getChats(event, item.id) } }>
				<div className="list--item-container__image"> 
					<div className="list--item__image">
						<img src={item.profilePhoto} alt={item.name}/>
					</div>
				</div>

				<div className="list--item__details d-flex flex-column w-100" >
					<span className="list--item__contact">
						
							<Highlighter name={item.name} celement={this.props.celement} />
						
					</span>
					<div className="d-flex flex-row align-items-center">
                    
						<span className="px-1">
							<Readstatus readstatus={item.isRead} />
						</span>
						<span className="list--item__message w-100">{item.lastMessage}</span>
					</div>
				</div>
			</div>
		)
	}
}


export default ContactListItem;