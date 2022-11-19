import {Gost} from './Gost.js';

function encryptMessage() {
    let enterText = document.getElementById("text-to-convert").value;
  	let key = document.getElementById("key").value;
  	let EncryptedMessage = new Gost(key);
  	let encryptMessage = EncryptedMessage.crypt(enterText,'encrypt');

  	document.getElementById("encrypt-message").value = encryptMessage;
}

function decryptMessage() {
  	let encryptMessage = document.getElementById("encrypt-message").value;
  	let key = document.getElementById("key").value;
  	let EncryptedMessage = new Gost(key);
  	let enterText = EncryptedMessage.crypt(encryptMessage,'decrypt');

  	document.getElementById("text-to-convert").value = enterText;
}

document.getElementById('encryptButton').addEventListener('click', () => {
	encryptMessage();
})

document.getElementById('decryptButton').addEventListener('click', () => {
	decryptMessage();
})
