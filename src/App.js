import React, { Component }     from 'react';
import ChatList                 from './components/containers/ChatList';
import View                     from './components/containers/View';
import './App.css';
import {data} from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: data,
      chatHistoryVisible: false,
      selectedChat: 0,
      selectedContactChat: null,
      displayContact: {contacts:data, messages:[]},
      isSearchActive:false,
    }
  }

  componentDidMount(){
  }
  handleChangeSearchUser = (e)=>{
    let messageResult = []
    let chatContact = this.state.contacts.filter((ele)=>ele.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
  if (e.target.value){
    this.state.contacts.forEach((ele)=>ele.chats.forEach(
      (msg)=>{

        if (msg.activeUser.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
          messageResult.push({user:ele, chat :msg.activeUser})
        }
        if (msg.receiver.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
          messageResult.push({user:ele, chat :msg.receiver})
        }
      }
    ))
  }


    this.setState({displayContact:{contacts:[...chatContact],messages:[...messageResult]},isSearchActive:e.target.value ? true:false})
  }

  render() {
    const { chatHistoryVisible, selectedContactChat, displayContact,isSearchActive } = this.state;
    return (
      <div className="app">
          <ChatList contacts={ displayContact } getChats={ this.getChats } search={this.handleChangeSearchUser} isSearchActive={isSearchActive}/>
          <View visibility={ chatHistoryVisible } selectedContact={ selectedContactChat }/>
      </div>
    );
  }


   getChats = (event, id) => {
     event.preventDefault();
    let [chat] = this.state.contacts.filter((contact)=>contact.id===id)
    this.setState({ chatHistoryVisible: true, selectedChat: id, selectedContactChat: chat });
   }

}

export default App;
