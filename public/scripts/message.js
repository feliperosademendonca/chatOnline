 
var socket = io ('http://127.0.0.1:3000/');

//var socket = io ('vercel.app:3000');

var audioEnviada = new Audio('./fx/tik.wav');
var audioRecebida = new Audio('./fx/won.mp3');


 function renderMessage(message){
 	if(message.id=== "usuario"){
 
		$('<div class="enviada"><strong>'+message.author+'</strong>:'+message.message +"<br>").appendTo('#chat');

		audioEnviada.play();
 
		}else{
 
		$('<div class="recebida"><strong>'+message.author+'</strong>:'+message.message +"<br>").appendTo('#chat');
		audioRecebida.play();
		}

		var chatTela = $('#chat')[0];
		chatTela.scrollTop = chatTela.scrollHeight;
 }


//historico temporario da conversa
   socket.on('previousMessage', function(messages){
		 for (message of messages)    
		 renderMessage(message);

 });

 //comunicação com todos os conectados
 socket.on('receivedMessage', function(message){
		renderMessage(message);
})


$('#chat').submit(function(event){
	event.preventDefault();

	var author=$('input[name=username]').val();
	var message=$('input[name=message]').val();
	var origem= 'usuario'
 
	if (author=="") {
 		fechaPopUp()
	} 
	
	if(author.length && message.length && origem.length){
		var messageObject={
			author:author,
			message:message,
			id:origem,
   		};

		renderMessage(messageObject);

		socket.emit('sendMessage', messageObject);

		$('input[name=message]').val('')
	} 

});

function volume(){
	p=$('#volume').text()

 
	if (p=== "volume_up"){
		$('#volume').text('volume_off')
		audioRecebida.muted = true;
		audioEnviada.muted = true;
 
	}else{ 
		$('#volume').text('volume_up')
		audioRecebida.muted = false;
		audioEnviada.muted = false;
	}
	
}

