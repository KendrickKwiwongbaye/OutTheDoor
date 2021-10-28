import React, {useState} from 'react'
import Chatbot from './chat'
import {FaTimes} from 'react-icons/fa'
import './ChatButton.css'
export default function ChatButton() {
//This is the button component. Just normal useState to toggle the button. 
//I didnt get around to adding animation or get crazy with CSS. But you can do that here. See the CSS file that is being imported. 
    const [state, setState] = useState(false)
    
    return (
        <div>  
            <div>
                <button onClick = {() => setState(!state)} className="button">
                    CHAT WITH US! 
                </button>
            </div>
                {state === true && <Chatbot/>}  
        </div>
    
    )
}
