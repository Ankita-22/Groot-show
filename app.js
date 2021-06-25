var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")
// console.log(outputDiv)
// outputDiv.innerText="Ankita is awsome"

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/groot";
function getTranslationURL(text){
    return   serverURL + "?" +"text=" + text;
}
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again after sometime")
}

function clickEventHandler(){
    var inputTxt=txtInput.value;//taking input

    //calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;//output
    })
    .catch(errorHandler)
   
};


btnTranslate.addEventListener("click",clickEventHandler)

