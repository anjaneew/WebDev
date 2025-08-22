/* Part 1: Copy and paste text */

function copyText(){
    let val = document.getElementById("copy-textbox").value;

    //COPY - navigator.clipboard.writeText(val).then(function);
    navigator.clipboard.writeText(val).then(function(){
        alert("Text copied to clipboard");
    });
}

 //PASTE -  navigator.clipboard.readText().then(function);
function pasteText(){
    navigator.clipboard.readText().then(function(clipText) {
        document.getElementById("paste-textbox").value = clipText
    }, function() {
        alert("Failed to access clipboard");
    });
}

/* Part 2: Using event listeners */

function setMessage(message){
    document.getElementById("event-text").innerText = message;
    setTimeout(() => {
        document.getElementById("event-text").innerText = "";
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function(event) {
    var copyPasteTextbox = document.getElementById("copy-paste-textbox");

    copyPasteTextbox.addEventListener('cut', (event) => {
        let selection = document.getSelection().toString().toUpperCase();
        event.clipboardData.setData('text/plain', selection);

        let val = copyPasteTextbox.value;
        let start = copyPasteTextbox.selectionStart;
        let end = copyPasteTextbox.selectionEnd;
        copyPasteTextbox.value = val.slice(0, start) + val.slice(end);
        copyPasteTextbox.setSelectionRange(start, start);

        setMessage("Cut text: " + selection);
        event.preventDefault();
    })

    copyPasteTextbox.addEventListener("copy", (event) => {
    let selection = document.getSelection().toString();
    setMessage("Copied text: " + selection);
    });

    copyPasteTextbox.addEventListener("paste", (event)=> {
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        setMessage("Pasted text: " + paste);
    });

});


/* Part 3: Pasting images */

document.onpaste = function(event) {
    let data = event.clipboardData || window.clipboardData;

    if (data.files.length) {
        let file = data.files[0];
   

        if(file.type.startsWith("image/")){
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function(){
                let img = document.getElementById("clipboard-image");
                img.setAttribute("src", reader.result);
                document.getElementById("filename").innerText = file.name;
            }
    } } 
}

