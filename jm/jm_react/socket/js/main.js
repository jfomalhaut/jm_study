const socket = io();
const message = one('#message');
const nickname = one('#nickname');
const sendBtn = one('#send');
const chat = one('#chat');

socket.on('connect', ()=>{
    socket.emit('newUser', {type : 'connect', nickname:nickname.value});
});

socket.on('update', (info)=>{
    const { nickname, msg, type} = info;
    const node= document.createElement('LI');
    let _msg = createMsg(type, nickname, msg);

    const textNode = document.createTextNode(_msg);
    node.appendChild(textNode);
    chat.appendChild(node);
});

sendBtn.addEventListener('click', send);

function send(){
    const payload = {
        type: 'message',
        nickname: nickname.value,
        msg: message.value
    };
    message.value = '';
    socket.emit('message', payload)
}

function createMsg(type, user, msg){
    switch(type){
        case 'connect' : return `${user}님이 접속했습니다`;
        case 'message': return `${user} : ${msg}`;
        case 'disconnection' : return `${user}님이 접속을 종료했습니다`;
    }
}


function appendHTML(element, src){
    chat.innerHTML = str;
    while (chat.children.length > 0) {
        element.appendHTML(chat.children[0]);
    }
}

function one(element){
    return document.querySelector(element)
}