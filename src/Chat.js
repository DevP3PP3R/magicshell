import React, {useState} from "react";
import "./App.css";
import shell from "./image/Shell.png"
import ChatMod from "./chatmodule";

function Chat() {

    const [msgArr, setMsgArr] = useState([]);
    const [ansArr, setAnsArr] = useState(['ask anything']);
    const [inputMsg, setInputMsg] = useState('');
    const handleInputChange =(e) => setInputMsg(e.target.value);
    const submitMsg = () =>{
        var answer = ChatMod(inputMsg);
        var newAnsarr = [...ansArr, answer];
        setAnsArr(newAnsarr);
        var newMsgArr = [...msgArr, inputMsg];
        setMsgArr(newMsgArr);
        setInputMsg('');
    }

    const ChatBoxMine = () => {
        const msgValue = msgArr.map((value, index) => (
        <div className="chat-box mine"
            style={{width: `${value.length * 0.7}em`}}
            key={index}>{value}</div>))
        return(
            <div>
            {msgValue}
            </div>
        );
    }

    const ChatBoxAns = () => {
        const ansValue = ansArr.map((value, index) => (
        <div className="chat-box answer"
            style={{width: `${value?value.length * 0.7:1}em`}}
            key={index}>{value}</div>))
        return(
            <div>
            {ansValue}
            </div>
        );
    }

    const onKeyDown = (e) => {if(e.key === 'Enter'){submitMsg();}}

    return (
    <div className="App">
        <div className="chat-content">
        <img src={shell} className="magicShell" alt='magicShell' />
        <ChatBoxAns />
        <ChatBoxMine style={{top : `${ansArr.length * -120}px`}} />
        </div>
        <input className="input-box" id="input" onChange={handleInputChange} onKeyDown={onKeyDown} value={inputMsg} />
        <button className="sendBtn" id="send" onClick={submitMsg}>물어보기</button>
    </div>
  );
}

export default Chat;
