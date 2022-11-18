import React, {useState} from "react";
import "./Chat.css";
import shell from "./image/Shell.png"
import ChatMod from "./chatmodule";

function Chat() {
    const [inputMsg, setInputMsg] = useState('');
    const [chatArr, setChatArr] = useState(['Ask Anything!']);
    const handleInputChange =(e) => setInputMsg(e.target.value);
    const submitMsg = () =>{
        var answer = ChatMod(inputMsg);
        var newChatArr = [...chatArr, inputMsg, answer];
        setChatArr(newChatArr);
        setInputMsg('');
    }

    const ChatBox = () => {
        const chatValue = chatArr.map((value, index) => (
            (index%2===0)
            ?<div className="chat-box answer"
                style={{width: `${value?value.length * 0.5:1}em`}}
                key={index}>{value}</div>
            :<div className="chat-box mine"
                style={{width: `${value.length * 0.5}em`}}
                key={index}>{value}</div>))
        return(
            <div>
            {chatValue}
            </div>
        );
    }

    const onKeyDown = (e) => {if(e.key === 'Enter'){submitMsg();}}

    return (
    <div className="ChatApp">
        <div className="chat-content">
        <img src={shell} className="magicShell" alt='magicShell' />
        <ChatBox />
        </div>
        <input className="input-box" id="input" onChange={handleInputChange} onKeyDown={onKeyDown} value={inputMsg} />
        <button className="sendBtn" id="send" onClick={submitMsg}>물어보기</button>
    </div>
  );
}

export default Chat;
