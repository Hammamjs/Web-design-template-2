let ourSkills = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.our-skills span');

let stats = document.getElementById('stats');
let counts = document.querySelectorAll('#stats h3');

let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval (() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    },2000 / goal)
}

window.onscroll = function ()  {

if(window.scrollY >= ourSkills.offsetTop) {

    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    })

}



if(window.scrollY >= stats.offsetTop) {
    if (!(started)) {
        counts.forEach((num) => startCount(num));
        started = true;
    }
}
}

        let button = document.getElementById('button');

    if (window.scrollY >= 900) {
        button.style.setProperty('display' , 'flex');
        button.style.setProperty('z-index' , '1000');
    button.addEventListener('click' , function () {
            window.scrollTo({
                top:0,
                behavior: 'smooth',
            })
    })
}
    else if (window.scrollY < 900) {
        button.style.setProperty('display' , 'none');
}

let showmegaMenu = document.getElementById('show');
let megaMenu = document.getElementById('mega-menu');

showmegaMenu.addEventListener('click', function () {
    if (megaMenu.classList.contains('show')) {
        megaMenu.style.display = 'flex';
        megaMenu.classList.remove('show')
    }else{
        megaMenu.style.display = 'none';
        megaMenu.classList.add('show');
    }
})






let countDown = new Date(" Mar 30, 2022 02:51:59").getTime();

let counter = setInterval( () => {

    let dateNow = new Date().getTime();
    
    let TimeDiff = countDown - dateNow;

    let days = Math.floor(TimeDiff / ( 1000 * 60 * 60 * 24) );

    let hours = Math.floor(TimeDiff % ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let minutes = Math.floor(TimeDiff % ( 1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));

    let seconds = Math.floor(TimeDiff % ( 1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000)

        document.getElementById('days').innerHTML = days< 10 ? `0${days}`: days;
        document.getElementById('hours').innerHTML = hours< 10 ? `0${hours}`: hours;
                document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}`: minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}`: seconds;

if (TimeDiff === 0) {
    clearInterval(counter);
}

}, 1000);



