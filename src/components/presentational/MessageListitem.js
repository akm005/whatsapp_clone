import React, { Component } from 'react';
import Readstatus from '../containers/Readstatus';
import Highlighter from './Highlighter';

class MessageListitem extends Component {
	render() {
		let {user,message} = this.props;
		return (
			<div className="list--item " onClick={ (event) => { this.props.getChats(event, user.id) } }>
				<div className="list--item-container__image"> 
					<div className="list--item__image">
						<img src={user.profilePhoto} alt={user.name}/>
					</div>
				</div>
				<div className="list--item__details d-flex flex-column w-100" >
					<span className="list--item__contact">{user.name}</span>
					<div className="d-flex flex-row align-items-center">
						<span className="px-1">
							<Readstatus readstatus={true} />
						</span>
						<span className="list--item__message w-100">
							{/* {message} */}
							<Highlighter name={message} celement={this.props.celement}/>
							</span>
					</div>
				</div>
			</div>
		)
	}
}

export default MessageListitem;