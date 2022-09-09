const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const alls = $$('.container');

const down = $('.ti-arrow-down');
const up = $('.ti-arrow-left');


let index = 1;

down.onclick = function(){

    $('.active').classList.remove('active');
    alls[index].classList.add('active')


    index++;
    if (index == alls.length){
        index = 0;
    }
    
}

let dem = 3;
up.onclick = function(){
    $('.active').classList.remove('active');
    alls[dem].classList.add('active')
    dem--;
    if (dem < 0){
        dem = alls.length - 1;
    }
    
}