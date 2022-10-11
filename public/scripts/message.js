 
var socket = io ('http://localhost:5000');

 

 function renderMessage(message){

	if(message.id== "usuario"){
		alert(message.id)

		$('<div class="enviada"><strong>'+message.author+'</strong>:'+message.message +"<br>").appendTo('#chat');
		var audio = new Audio('./fx/tik.mp3');

		audio.play();
 
		}else{
			alert("recebida")

		$('<div class="recebida"><strong>'+message.author+'</strong>:'+message.message +"<br>").appendTo('#chat');
		var audio = new Audio('./fx/won.mp3');
		audio.play();
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

 

function volume(value){

	var bool = $("audio").prop("muted");

	if (value=== "off"){
		alert(value)
		$("audio").prop("muted",bool);

 		$('.tik').muted = true;
		$('.won').muted = true;
		$('#chat').append('<span class="material-symbols-outlined volume-icon" onclick="volume(off)">volume_off</span>');
		
 
	}else{
		alert("vlumue on")
		$("audio").prop("muted",!bool);

 
		$('.tik').muted = false;
		$('.won').muted = false;
		$('#chat').append('<span class="material-symbols-outlined volume-icon" onclick="volume(off)">volume_up</span>');

	}
}