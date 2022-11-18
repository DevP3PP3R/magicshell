import React, {useState} from "react";
import "./App.css";
import ChatModule from "./chatmodule";

function Chat() {
    const [msgArr, setMsgArr] = useState([]);
    const [inputMsg, setInputMsg] = useState('');
    const handleInputChange =(e) => setInputMsg(e.target.value);
    const submitMsg = () =>{
        var newMsgArr = [...msgArr, inputMsg];
        setMsgArr(newMsgArr);
        setInputMsg('');
    }
    //ChatModule();
    const ChatBoxMine = () => {

        const msgValue = msgArr.map((value, index) => (
        <div className="chat-box mine"
            style={{width: `${value.length * 0.7}em`}}
            id={index}>{value}</div>))
        return(
            <div>
            {msgValue}
            </div>
        );
    }
    const onKeyDown = (e) => {if(e.key === 'Enter'){submitMsg();}}

    return (
    <div className="App">
        <div className="chat-content">
        <ChatBoxMine />
        </div>
        <input className="chat-box" id="input" onChange={handleInputChange} onKeyDown={onKeyDown} value={inputMsg} />
        <button id="send" onClick={submitMsg}>전송</button>
    </div>
  );
}

export default Chat;
