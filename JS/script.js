var txtInput = document.querySelector('#txt-input');
var ouputDiv = document.querySelector('#output');
var btnTransalte = document.querySelector('#btn-translate');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(txtInput){
    return serverURL + "?" + "text=" + txtInput;
}

function clickEventhandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json =>{
        var translatedText = json.contents.translated
        ouputDiv.innerText = translatedText
    })
}

btnTransalte.addEventListener("click", clickEventhandler);

