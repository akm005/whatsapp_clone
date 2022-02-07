import React, { Component }     from 'react';
import ViewWhatsapp             from '../presentational/ViewWhatsapp';  
import ViewChatHistory          from './ViewChatHistory';  

class View extends Component {
    render(){
        let visibility = this.props.visibility;
        let view;
        view = (visibility) ? <ViewChatHistory selectedContactChat={ this.props.selectedContact } /> : <ViewWhatsapp />
        return(
         <div className="view d-flex"  style={{ "flexGrow": "1",flexDirection: "column"}}>
                { view }
          </div>
        )
    }
}

export default View;   