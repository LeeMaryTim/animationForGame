const board = document.querySelector('#board');
const squares_number = 650;
const colors = ['#EE204D', '#E32636', ' #FF2400', '#B00000',
                '#480607', '#9B2D30', '#900020', '#5E2129', '#7B001C', ' #CD5C5C',
                '#C41E3A', '#960018', '#A2231D', '#FF0033', '#DC143C'];

for(let i = 0; i < squares_number; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=>{
        setColor(square);
    })

    square.addEventListener('click', ()=>{
        setShadow(square);
    })

    square.addEventListener('mouseleave', ()=>{
        removeColor(square);
    })

    board.append(square);
}

function setShadow(e){
    e.style.boxShadow = '0 0 2px red, 0 0 40px red';
    e.style.height = '14px';
    e.style.borderRadius = '8px';
}


function setColor(e){
    const color = getRandomColor()
    e.style.backgroundColor = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e){
    e.style.backgroundColor = '#1d1d1d';
    e.style.boxShadow = '0 0 2px #000';
    e.style.borderRadius = '0';
    e.style.height = '20px';
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
