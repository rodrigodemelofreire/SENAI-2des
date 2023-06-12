function encryptMessage() {
    var messageInput = document.getElementById('message');
    var encryptedInput = document.getElementById('encrypted');
  
    var message = messageInput.value;
    var encryptedMessage = '';
  
    // Implemente aqui o algoritmo de criptografia desejado
    // Neste exemplo, apenas invertemos a ordem dos caracteres
    for (var i = message.length - 1; i >= 0; i--) {
      encryptedMessage += message[i];
    }
  
    encryptedInput.value = encryptedMessage;
  }
  