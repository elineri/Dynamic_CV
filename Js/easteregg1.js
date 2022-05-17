document.getElementById('egg1').addEventListener('click', changeBackground);
let color;

function changeBackground(){
    if(color === `#f7ede2`){
        color = `#aac99c`
    }
    else{
        color = `#f7ede2`
    }
    document.body.style.backgroundColor = color;
}