import Chatbot from 'react-chatbot-kit'
import config from './config.js';
import ActionProvider from './actionProvider.js';
import MessageParser from './messageParser.js';
import './ChatButton.css'

//GO TO https://fredrikoseberg.github.io/react-chatbot-kit-docs/ for more info how chat bot works, and how to customize. There are tons of videos by the creator of the npm package.
//This component doesnt need to be changed. The only real change that needs to be made are changes to the Chatbutton style. See the documentation about config. 
//Notice the class name in Chatbot and the CSS file being imported. 

function chatbot(){
 
  return(
    <div className="chatbot">
    <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        className='react-chatbot-kit-container'
        className='react-chatbot-kit-chat-bot-message'
        className= 'react-chatbot-kit-chat-bot-avatar-letter'
    /> 
    </div>
  );
}

export default chatbot;
