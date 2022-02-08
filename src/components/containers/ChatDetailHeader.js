import React, { Component } from "react";

class ChatDetailHeader extends Component {
    
    // constructor(props){
    //     super(props)
    //     // contact =  this.props.selectedContactChat.contact
    //     // console.log(props,this.contact,this.props)

    // }
    
    render() {
       let  contact =  this.props.selectedContactChat
        return (
            <div className="header" key={contact.id}>
                    <div className="user-details d-flex">
                        <img
                            src={contact.profilePhoto}
                            style={{
                                width: "45px",
                                height: "40px",
                                borderRadius: "100%",
                                marginRight: "20px",
                            }}
                            alt={""}
                        />
                        <div className="user-details-name">
                            <span>{contact.name}</span>
                        </div>
                    </div>

                    <nav
                        className="extra-icons"
                        style={{
                            width: "120px",
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                        }}
                    >
                        <i className="material-icons">&#xE8B6;</i>
                        <i className="material-icons">&#xE226;</i>
                        <i className="material-icons">&#xE5D4;</i>
                    </nav>
            </div>
        );
    }
}
export default ChatDetailHeader;
