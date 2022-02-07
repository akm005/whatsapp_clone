import React, { Component } from 'react';

class ViewChatHistory extends Component{
    render(){
        console.log(this.props.selectedContactChat);
        return(
            <div className='w-100'>
                {
                    this.props.selectedContactChat.map( (contact) =>{
                        return (<div className="view--chat" style={{"display": "flex", "flexGrow": "1","flex-direction": "column" }}>
                            <header key={contact.id} > 
                                <div className="user-details">
                                    <img src={contact.profilePhoto} style={{"width": "45px", "height": "40px", "borderRadius": "100%", "marginRight": "20px"}} alt={""}/>
                                    <div className="user-details-name">
                                        <h3>{contact.name}</h3>
                                    </div>
                                </div>

                                <nav className="extra-icons" style={{"width": "120px", "display": "flex", "justifyContent" : "space-between", "marginTop" : "10px"}}>
                                    <i className="material-icons">&#xE8B6;</i>
                                    <i className="material-icons">&#xE226;</i>
                                    <i className="material-icons">&#xE5D4;</i>
                                </nav>

                            </header>
                            <div className='chat'>chat area</div>
                            <footer>Anup kumar singh</footer>
                            </div>
                        )
                    })
                }
                

            </div>
        )
    }
}

export default ViewChatHistory;