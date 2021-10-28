import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";

//this component is where you can customize the chatbot. Go to the website on chat.js to see further info. There is TONS of documentation on this.

const config = {
  //This is some of the basic stuff you can change. The name of the bot and the inital message or gretting. 
  botName:'OutTheDoor',
  initialMessages: [createChatBotMessage(`Welcome to Out The Door! How can we help?`)],
  customStyles:{
    botMessageBox:{
      width:300
    }
  }
  
}

export default config