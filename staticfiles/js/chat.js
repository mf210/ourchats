// lab :)
document.querySelector('.msg_card_body').innerHTML = '';

let roomName = 'lobby';

// Add event listener for chat room name
document.querySelector('.search_btn').onclick = function(e) {
    roomName = document.querySelector('.search').value;
    console.log(roomName);
}


// create websocket instance
const chatSocket = new WebSocket(`ws://${window.location.host}/ws/chat/lobby/`);

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    const msg = `
    <div class="d-flex justify-content-start mb-4">
        <div class="img_cont_msg">
            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_cotainer">
            ${data.message}
            <span class="msg_time">8:40 AM, Today</span>
        </div>
    </div>
    `;
    // const msgNode = document.create(msg);
    document.querySelector('.msg_card_body').innerHTML += msg;
}

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
}

// Add event listener for send message
document.querySelector('.send_btn').addEventListener('click', function(e){
    const messageInputDom = document.querySelector('.type_msg');
    const message = messageInputDom.value;
    chatSocket.send(JSON.stringify({message}));
    messageInputDom.value = '';
    document.querySelector('.msg_card_body').innerHTML += `
        <div class="d-flex justify-content-end mb-4">
            <div class="msg_cotainer_send">
                ${message}
                <span class="msg_time_send">8:55 AM, Today</span>
            </div>
            <div class="img_cont_msg"> 
                <img src="">
            </div>
        </div>
    `;
})


// const roomName = JSON.parse(document.getElementById('room-name').textContent);

//         const chatSocket = new WebSocket(
//             'ws://'
//             + window.location.host
//             + '/ws/chat/'
//             + roomName
//             + '/'
//         );

//         chatSocket.onmessage = function(e) {
//             const data = JSON.parse(e.data);
//             document.querySelector('#chat-log').value += (data.message + '\n');
//         };

//         chatSocket.onclose = function(e) {
//             console.error('Chat socket closed unexpectedly');
//         };

//         document.querySelector('#chat-message-input').focus();
//         document.querySelector('#chat-message-input').onkeyup = function(e) {
//             if (e.keyCode === 13) {  // enter, return
//                 document.querySelector('#chat-message-submit').click();
//             }
//         };

//         document.querySelector('#chat-message-submit').onclick = function(e) {
//             const messageInputDom = document.querySelector('#chat-message-input');
//             const message = messageInputDom.value;
//             chatSocket.send(JSON.stringify({
//                 'message': message
//             }));
//             messageInputDom.value = '';









// document.querySelector('#room-name-input').focus();
// document.querySelector('#room-name-input').onkeyup = function(e) {
//     if (e.keyCode === 13) {  // enter, return
//         document.querySelector('#room-name-submit').click();
//     }
// };

// document.querySelector('#room-name-submit').onclick = function(e) {
//     var roomName = document.querySelector('#room-name-input').value;
//     window.location.pathname = '/chat/' + roomName + '/';
// };