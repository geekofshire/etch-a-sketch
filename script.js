const grid=document.querySelector('.grid')
createGrid=()=>{
    for(let i=0;i<289;i++){
        const div=document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover',function(event){
            div.style.backgroundColor='black';
        })
        grid.appendChild(div);
    }
}
function removeAllCell(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
function getRandomColor(){
    let temp=Math.floor(Math.random()*16777215).toString(16);
    temp='#'+temp;
    return temp;
}

const colorSpecific=document.querySelector('#color')
colorSpecific.addEventListener('input',function(event){
    const colorVal=document.getElementById('color').value;
    let val=document.getElementById('slider').value;
    let cell=Array.from(grid.children);
    for(let i=0;i<val*val;i++){
        cell[i].addEventListener('mouseover',function(event){
            event.target.style.backgroundColor=colorVal;
        })
    }
})

const black=document.querySelector('#black');
black.addEventListener('click',function(){
    let val=document.getElementById('slider').value;
    let cell=grid.children;
    for(let i=0;i<val*val;i++){
        cell[i].addEventListener('mouseover',function(event){
            event.target.style.backgroundColor='black';
        })
    }
})

const randomColor=document.querySelector('#rgb');
randomColor.addEventListener('click',function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
            })
    }
});

const slider=document.querySelector('#slider');
const screenVal=document.querySelector('#value');
slider.addEventListener('input',function(){
    let x=document.getElementById('slider').value;
    screenVal.textContent=x;
    removeAllCell(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${x}, 2fr); grid-template-rows: repeat(${x}, 2fr);`);
    for(let i=0;i<x*x;i++){
        const div=document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover',function(event){
            event.target.style.backgroundColor='black';
        })
        grid.appendChild(div);
    }
});

createGrid();