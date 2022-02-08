import React, { Component } from 'react';


class ChatListSearch extends Component {
    constructor(props){
        super(props);
        this.state ={isActive:false
        }
    }
    render(){
       let imgicon = !this.state.isActive?(<svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
            ):(                          <svg viewBox="0 0 24 24" width="24" height="24" className=''><path fill="currentColor" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
            )
        return(
            <div className="chatlist--search polition-relative align-items-center" style={{"position": "relative"}}>
              <span className='search--icon p-1 position-relative'>{imgicon}</span>
              <input onFocus={()=>{this.setState({isActive:true})}} onBlur={()=>{this.setState({isActive:false})}} onChange={this.props.search} type="" placeholder="search or start a new chat"/>
              </div>
        )
    }
}


export default ChatListSearch;