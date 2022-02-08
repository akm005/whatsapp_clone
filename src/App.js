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
      displayContact: data
    }
  }

  componentDidMount(){
  }
  handleChangeSearchUser = (e)=>{
    
    let newData = this.state.contacts.filter((ele)=>ele.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    this.setState({displayContact:[...newData]})
  }

  render() {
    const { chatHistoryVisible, selectedContactChat, displayContact } = this.state;
    return (
      <div className="app">
          <ChatList contacts={ displayContact } getChats={ this.getChats } search={this.handleChangeSearchUser}/>
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
