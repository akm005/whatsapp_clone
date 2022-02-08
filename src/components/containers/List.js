import React, { Component }     from 'react';
import ContactListItem                 from '../presentational/ContactListItem';

class List extends Component {
    render(){
        let listitem = this.props.contacts.map((item) => {
            return <ContactListItem item={item} key={item.id} getChats={ this.props.getChats }/>
            
        })
        return(
            <div className="">
                   <div>
                       {listitem}
                   </div>
            </div>
        )
    }
}

export default List;