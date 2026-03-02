// zrobic zdarzenie najecham na przycisk, zjezdzam to cos sie dzieje, klikniecie cos sie dzieje
// dla elementu na stronie rusza sie lewo-prawo za pomoca klawiatury (ciasteczko)

const button = document.querySelector('#guziczek');
const ruszanie = document.querySelector('#ciasteczko');

let positionX = 0;
let positionY = 0;

button.addEventListener('mouseenter', function(){
    button.classList.add('najechane');
});

button.addEventListener('mouseleave', function(){
    button.classList.remove('najechane');
});

button.addEventListener('click', function(){
    button.classList.toggle('kolor');
});


document.addEventListener('keydown', function(event){
    if (event.key === 'a'){
        positionX = positionX - 5;
    }
    else if (event.key === 'd'){
        positionX = positionX + 5;
    }
    else if (event.key === 'w'){
        positionY = positionY - 5;
    }
    else if (event.key === 's'){
        positionY = positionY + 5;
    }

    ruszanie.style.transform = `translate(${positionX}px, ${positionY}px)`;
});