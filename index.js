let drumSize = document.querySelectorAll('.drum').length;
for(let i = 0; i<drumSize; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//Detect keypress
document.addEventListener('keypress',function(event){
    makeSound(event.key);
});

//function
function makeSound(key){
    switch(key){
        case "w":
            let tune1 = new Audio('sounds/crash.mp3');
            tune1.play();
            break;
        case "a":
            let tune2 = new Audio('sounds/tom-4.mp3');
            tune2.play();
            break;
        case "s":
            let tune3 = new Audio('sounds/tom-3.mp3');
            tune3.play();
            break;
        case "d":
            let tune4 = new Audio('sounds/tom-2.mp3');
            tune4.play();
            break;
        case "j":
            let tune5 = new Audio('sounds/tom-1.mp3');
            tune5.play();
            break;
        case "k":
            let tune6 = new Audio('sounds/snare.mp3');
            tune6.play();
            break;
        case "l":
            let tune7 = new Audio('sounds/kick-bass.mp3');
            tune7.play();
            break;
    }
};