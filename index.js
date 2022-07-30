function selection() {
    if (window.getSelection)
           return window.getSelection();
}
setTimeout(() => { 
    console.log(selection)
},10000)

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: "Translator", 
        id: "translator",
        onclick: handleClick,
        contexts: ['selection']
    })    
});

function handleClick(info) {
    let l = document.createElement("h1")
    l.innerText = info.selectionText
    document.body.append(info.selectionText)
}