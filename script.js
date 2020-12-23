
const lightBtn = document.getElementById('light');
const eraseBtn = document.getElementById('erase');
const grayBtn = document.getElementById('gray');
const blackBtn = document.getElementById('black');

function makeDiv() {
    const etch = document.getElementById('etch')
    let grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    etch.appendChild(grid).className = 'grid';
}

function makeGrid(rows, cols) {
    const grid = document.getElementById('grid');
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for( c = 0; c < ( rows * cols); c++) {
        let cell = document.createElement('div');
        grid.appendChild(cell);
    };
    black();
};

function changeSize() {

const btns = document.querySelectorAll('.gridsizes');
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.id === '10x10') {
            document.getElementById("grid").innerHTML = "";
            removeActStyle();
            makeGrid(10, 10);
        } else if (event.target.id === '20x20') {
            document.getElementById("grid").innerHTML = "";
            removeActStyle();
            makeGrid(20, 20);
        } else if (event.target.id === '50x50') {
            document.getElementById("grid").innerHTML = "";
            removeActStyle();
            makeGrid(50, 50);
        } else if (event.target.id === '80x80') {
            document.getElementById("grid").innerHTML = "";
            removeActStyle();
            makeGrid(80, 80);
        } else if (event.target.id === '100x100') {
            document.getElementById("grid").innerHTML = "";
            removeActStyle();
            makeGrid(100, 100);
        } else {
            return;
        }
    });
});

var gridbtn = buttons.getElementsByClassName("button");

    for (var i = 0; i < gridbtn.length; i++) {
        gridbtn[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function changeColor() {

    const colorbtns = document.querySelectorAll('.colorbutton');
    colorbtns.forEach(btn => {
        btn.addEventListener('click', event => {
            if (event.target.id === 'light') {
                light();
            } else if (event.target.id === 'erase') {
                erase();
            } else if (event.target.id === 'gray') {
                gray();
            } else if (event.target.id === 'black') {
                black();
            }  else {
                return;
            }
        });
    });
    
    var colorbtn = buttons.getElementsByClassName("clrbutton");
    
        for (var i = 0; i < colorbtn.length; i++) {
            colorbtn[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("act");
                current[0].className = current[0].className.replace(" act", "");
                this.className += " act";
            });
        }
}

function black() {
    let gridItems = document.querySelectorAll('.grid > div');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.background = 'black';
        })
    })
}

function gray() {
    let gridItems = document.querySelectorAll('.grid > div');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.background = 'gray';
        })
    })
}

function light() {
    let gridItems = document.querySelectorAll('.grid > div');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            let r = Math.floor((Math.random() * 255) + 1);
            let g = Math.floor((Math.random() * 255) + 1);
            let b = Math.floor((Math.random() * 255) + 1);
            
            item.style.background = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

function erase() {
    let gridItems = document.querySelectorAll('.grid > div');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.background = 'white';
        })
    })
}


function removeActStyle() {

    const style = document.getElementsByClassName('clrbutton');
    // removes act from button class
    for (var i=0; i < style.length; i++)
    style[i].classList.remove('act');    
    // reassigns act to black button class
    document.getElementById('black').className += " act";
}

function start() {
makeDiv();
makeGrid(50,50);
changeSize();
changeColor();
black();
}

start();
