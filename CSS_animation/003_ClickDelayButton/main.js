const button = document.querySelector("button");
const timeout = 1000;
let deleteTimer;
let isHoldingDeleteButton;

button.addEventListener('mousedown', (e)=>{
    isHoldingDeleteButton = true;
    deleteTimer = setTimeout(()=>{
        button.innerText = 'Deleted!';
    }, timeout);
})

window.addEventListener('mouseup',(e)=>{
    if(isHoldingDeleteButton){
        if(deleteTimer){
            clearTimeout(deleteTimer);
        }

        button.innerText = 'Delete';
    }
})