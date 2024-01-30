let textarea = document.getElementById('content-text');
let alertText = document.querySelector('.alert-text');
let buttonEncrypt = document.getElementById('encrypt-button');
let buttonDecrypt = document.getElementById('decrypt-button');
let resultText = document.getElementById('result-text')
let image = document.getElementById('container_img');
let message = document.getElementById('container-message');
let advice = document.getElementById('container-advice-messsage');
let copyButton = document.getElementById('copy-button');

function removeItens() {
    image.classList.add('not-visible');
    message.classList.add('not-visible');
    advice.classList.add('not-visible');
    copyButton.classList.remove('not-visible');
}

function asideAdjust() {
    let aside = document.getElementById('aside');
    aside.style.justifyContent = 'initial';
    aside.style.overflow = 'auto';
    resultText.style.marginBottom = '35%';
}

function encrypt() {
    let selectText = textarea.value;

    if (!/^[a-z\s]*$/.test(textarea.value) || textarea.value === '') {    
        alertText.style.color = 'red';
        textarea.value = '';
    } else {
        let encryptMessage = selectText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        removeItens();
        asideAdjust();
        resultText.innerHTML = encryptMessage;
        textarea.value = '';
        resultText.value = '';
        alertText.style.color = 'initial';
        spanAlert.innerText = '';
    }
}

function decrypt() {
    let selectText = textarea.value;

    if (!/^[a-z\s]*$/.test(textarea.value) || textarea.value === '') {    
        alert.style.color = 'red';

        textarea.value = '';
    } else {
        let decryptMessage = selectText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        removeItens();
        asideAdjust();
        resultText.innerHTML = decryptMessage;
        textarea.value = '';
        resultText.value = '';
        alert.style.color = 'initial';
    }
}

function copyText() {
    let copyText = document.getElementById('result-text').innerText;
    alert ('Texto copiado com sucesso.');
    navigator.clipboard.writeText(copyText)
}