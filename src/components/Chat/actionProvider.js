//This component creates the response to the of the user in message parser. 

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    //this is the chat and updates with every input by user and output by bot
    addMessageToBotState = (messages) => {
        if (Array.isArray(messages)) {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, ...messages],
          }));
        } else {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, messages],
          }));
        }
      };
    
    //See all these examples for response.   
    handleAppointment = () => {
       const msg = this.createChatBotMessage("I'd be glad to help put you in contact with the Dealer! How would you like the dealer to contact you? Phone or Email?")
       this.addMessageToBotState(msg)
       
    }

    handleGreeting = () => {
        const msg = this.createChatBotMessage("Thanks for visting our site! What can I help you with?")
        this.addMessageToBotState(msg)
     }

    handleHelp = () => {
        const msg = this.createChatBotMessage("How can I help you?")
        this.addMessageToBotState(msg)
     }
    
    handlePhone = () =>{
      const msg = this.createChatBotMessage("Perfect! Please submit the phone number you would like to be contacted at. Please include area code.")
      this.addMessageToBotState(msg)
    }

    handleEmail = () =>{
      const msg = this.createChatBotMessage("Perfect! Please submit the email you would like to be contacted at.")
      this.addMessageToBotState(msg)
    }
   
  }

  export default ActionProvider;