function changeColor() {

    const colorbtns = document.querySelectorAll('colorbutton');
    colorbtns.forEach(btn => {
        btn.addEventListener('click', event => {
            if (event.target.id === 'light') {
                // document.getElementById("grid").innerHTML = "";
                // makeGrid(10, 10);
                console.log(event.target.id);
            } else if (event.target.id === 'erase') {
                console.log(event.target.id);
            } else if (event.target.id === 'gray') {
                console.log(event.target.id);
            } else if (event.target.id === 'black') {
                console.log(event.target.id);
            }  else {
                return;
            }
        });
    });
    
    // var gridbtn = buttons.getElementsByClassName("button");
    
    //     for (var i = 0; i < gridbtn.length; i++) {
    //         gridbtn[i].addEventListener("click", function() {
    //             var current = document.getElementsByClassName("active");
    //             current[0].className = current[0].className.replace(" active", "");
    //             this.className += " active";
    //         });
    //     }
}