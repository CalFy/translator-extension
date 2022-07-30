function selection() {
    if (window.getSelection)
           return window.getSelection();
}
setTimeout(() => { 
    console.log(selection)
},10000)
