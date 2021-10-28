//This component parses the input of the chat. The parser is based on keywords. Choose the keyword and and create a method to respond to it. 
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        //this makes all input into lowercase 
        //so make sure the keyword your looking for is in lowercase
        const msg = message.toLowerCase();
        
        //based on the keyword you are able to respond with the respective method. See all methods in actionProvider.
        if(msg.includes("appointment")){
            this.actionProvider.handleAppointment()
        }
        if(msg.includes("hello") || msg.includes("hi") || msg.includes("good morning")){
            this.actionProvider.handleGreeting()
        }
        if(msg.includes("help")){
            this.actionProvider.handleHelp()
        }
        if(msg.includes("phone")){
            this.actionProvider.handlePhone()
        }
        if(msg.includes("email")){
            this.actionProvider.handleEmail()
        }
    }

}  
export default MessageParser;