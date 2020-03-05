const canvas = document.getElementById('myCanvas')
canvas.width = 1100;
canvas.height = 500;
const c = canvas.getContext('2d');
let vars = () => {
    let x = Math.random() * (canvas.width - 200);
    let y = Math.random() * (canvas.height - 100);
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    let varObj = {
        x, y, r, g, b
    }
    return varObj;
}
let currX;
let currY;
document.getElementById('leftBtn').disabled = true;
document.getElementById('rightBtn').disabled = true;
document.getElementById('deleteBtn').disabled = true;
isDrawn= false;

let draw = (x,y,upX,upY) => {
    // let { x, y, r, g, b } = callback();
    r = 255;
    g = 0;
    b = 0;
    c.fillStyle = `rgb(${r},${g},${b})`;
    if (selectedObject=="rect"){
        c.fillRect(x, y, upX, upY);
        c.stroke();
    } else if( selectedObject == "circle"){
        // c.arc(x,y,())
    }
    document.getElementById('drawBtn').disabled = true;
    document.getElementById('leftBtn').disabled = false;
    document.getElementById('rightBtn').disabled = false;
    document.getElementById('deleteBtn').disabled = false;
    currX = x;
    currY = y;
    height = upY;
    width = upX;
    isDrawn = true;
}
let shiftRight = (width, height) => {
    if (currX + 200 < 1095) {
        currX += 15;
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.fillRect(currX, currY, width, height);
    } else {
        // console.log(currX+200)
        alert('Reached Border!! Shift Left or Delete.')
    }
}
let shiftLeft = (upX, upY) => {
    if (currX > 5) {
        currX -= 15;
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.fillRect(currX, currY, upX, upY);
    } else {
        alert('Reached Border!! Shift Right or Delete.')
    }
}

let deleteRect = () => {
    c.clearRect(0, 0, innerWidth, innerHeight);
    document.getElementById('drawBtn').disabled = false;
    document.getElementById('leftBtn').disabled = true;
    document.getElementById('rightBtn').disabled = true;
    document.getElementById('deleteBtn').disabled = true;
    isDrawn=false;
}

let selectObject = (event)=>{
     selectedObject = event.target.value;
     console.log(selectedObject);
}

let getMousePosition= ()=>{

}

 canvas.addEventListener('mousedown', (event)=>{
     x = event.clientX - event.target.offsetLeft;
     y = event.clientY - event.target.offsetTop;
     // console.log(event.target.offsetLeft, event.target.offsetTop);
     // console.log(event.clientX, event.clientY);
     console.log(x, y);
     // draw(x,y);
     // draw(vars);
    })
    
    canvas.addEventListener('mouseup', (event)=>{
        upX = (event.clientX - event.target.offsetLeft)-x;
        upY = (event.clientY - event.target.offsetTop)-y;   
    console.log(upX, upY);
    if(isDrawn==false){
        draw(x,y,upX,upY);
    }
    // console.log(event)
})