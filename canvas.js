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

let draw = (callback) => {
    let { x, y, r, g, b } = callback();
    c.fillStyle = `rgb(${r},${g},${b})`;
    c.fillRect(x, y, 200, 100);
    c.stroke();
    document.getElementById('drawBtn').disabled = true;
    currX = x;
    currY = y;
}
let shiftRight = () => {
    if (currX + 200 < 1095) {
        currX += 15;
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.fillRect(currX, currY, 200, 100);
    } else {
        // console.log(currX+200)
        alert('Reached Border!! Shift Left or Delete.')
    }
}
let shiftLeft = () => {
    if (currX > 5){
        currX -= 15;
    c.clearRect(0, 0, innerWidth, innerHeight);
        c.fillRect(currX, currY, 200, 100);
    } else {
        alert('Reached Border!! Shift Right or Delete.')
    }
}

let deleteRect = () => {
    c.clearRect(0, 0, innerWidth, innerHeight);
    document.getElementById('drawBtn').disabled = false;
}

